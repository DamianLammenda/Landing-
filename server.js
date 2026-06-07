const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('.'));

// TMDB Proxy Configuration
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const getTmdbConfig = () => {
    const key = process.env.TMDB_API_KEY;
    const token = process.env.TMDB_ACCESS_TOKEN;
    if (!key && !token) {
        console.warn('Warning: TMDB_API_KEY or TMDB_ACCESS_TOKEN not found in environment');
    }
    return { key, token };
};

app.get('/api/trending', async (req, res) => {
    try {
        const { key, token } = getTmdbConfig();
        if (!key && !token) {
            return res.status(500).json({ error: 'TMDB credentials not configured' });
        }

        const type = req.query.type || 'movie'; // movie or tv
        const config = {
            params: { api_key: key, language: 'es-AR' }
        };

        if (token) {
            config.headers = { Authorization: `Bearer ${token}` };
            delete config.params.api_key;
        }

        const response = await axios.get(`${TMDB_API_BASE}/trending/${type}/week`, config);
        res.json(response.data);
    } catch (error) {
        console.error('TMDB Trending Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch from TMDB' });
    }
});

app.get('/api/search', async (req, res) => {
    try {
        const { key, token } = getTmdbConfig();
        const query = req.query.q;
        if (!query) return res.status(400).json({ error: 'Query is required' });

        const config = {
            params: { api_key: key, language: 'es-AR', query, include_adult: false }
        };

        if (token) {
            config.headers = { Authorization: `Bearer ${token}` };
            delete config.params.api_key;
        }

        const response = await axios.get(`${TMDB_API_BASE}/search/multi`, config);
        res.json(response.data);
    } catch (error) {
        console.error('TMDB Search Error:', error.message);
        res.status(500).json({ error: 'Failed to search TMDB' });
    }
});

app.get('/api/details/:type/:id', async (req, res) => {
    try {
        const { key, token } = getTmdbConfig();
        const { type, id } = req.params;

        const config = {
            params: { api_key: key, language: 'es-AR', append_to_response: 'videos,credits' }
        };

        if (token) {
            config.headers = { Authorization: `Bearer ${token}` };
            delete config.params.api_key;
        }

        const response = await axios.get(`${TMDB_API_BASE}/${type}/${id}`, config);
        res.json(response.data);
    } catch (error) {
        console.error('TMDB Details Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch details' });
    }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});
