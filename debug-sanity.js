
const { createClient } = require('next-sanity');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'l5l29d66';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});

async function testConnection() {
    console.log('Testing Sanity Connection...');
    console.log('Config:', { projectId, dataset, apiVersion });

    try {
        const settings = await client.fetch('*[_type == "settings"][0]');
        console.log('Successfully fetched settings:', settings ? 'Found document' : 'No document found');
        if (settings) {
            console.log('Company Name:', settings.companyName);
        }
    } catch (error) {
        console.error('Fetch failed:', error.message);
    }
}

testConnection();
