import { getCliClient } from 'sanity/cli'
import path from 'path'
import fs from 'fs'

const client = getCliClient({ apiVersion: '2024-01-01' })

async function seed() {
    console.log('🌱 Starting seed...')

    // 1. Upload Assets
    let heroImageId = null
    let featuredImageId = null

    const heroPath = path.join(process.cwd(), 'public', 'luxury-german-car-workshop-interior-dark-ambient-l.jpg')
    const featuredPath = path.join(process.cwd(), 'public', 'professional-mechanic-working-on-german-luxury-car.jpg')
    const logoPath = path.join(process.cwd(), 'public', 'images', 'image.png')

    let logoAssetId = null

    if (fs.existsSync(heroPath)) {
        try {
            const buffer = fs.readFileSync(heroPath)
            const asset = await client.assets.upload('image', buffer, { filename: 'hero.jpg' })
            heroImageId = asset._id
        } catch (e) { console.error('Hero upload failed', e) }
    }

    if (fs.existsSync(featuredPath)) {
        try {
            const buffer = fs.readFileSync(featuredPath)
            const asset = await client.assets.upload('image', buffer, { filename: 'featured.jpg' })
            featuredImageId = asset._id
        } catch (e) { console.error('Featured upload failed', e) }
    }

    if (fs.existsSync(logoPath)) {
        try {
            const buffer = fs.readFileSync(logoPath)
            const asset = await client.assets.upload('image', buffer, { filename: 'logo.png' })
            logoAssetId = asset._id
        } catch (e) { console.error('Logo upload failed', e) }
    }

    // 2. Navigation
    const headerMenu = {
        _id: 'header-menu',
        _type: 'navigation',
        title: 'Header Menu',
        items: [
            { _key: '1', name: 'Inicio', href: '#' },
            { _key: '2', name: 'Servicios', href: '#servicios' },
            { _key: '3', name: 'Nosotros', href: '#nosotros' },
            { _key: '4', name: 'Contacto', href: '#contacto' },
        ]
    }

    const footerMenu = {
        _id: 'footer-menu',
        _type: 'navigation',
        title: 'Footer Menu',
        items: [
            { _key: '1', name: 'Inicio', href: '#' },
            { _key: '2', name: 'Aviso Legal', href: '#' },
        ]
    }

    // 3. Settings
    const settings = {
        _id: 'settings',
        _type: 'settings',
        companyName: 'Repuestos Germana',
        phoneNumber: '3025459865',
        whatsappNumber: '3043598195',
        email: 'info@repuestosgermana.com',
        address: 'Bogotá, Colombia',
        logo: logoAssetId ? { _type: 'image', asset: { _type: 'reference', _ref: logoAssetId } } : undefined,
        headerMenu: { _type: 'reference', _ref: 'header-menu' },
        footerMenu: { _type: 'reference', _ref: 'footer-menu' }
    }

    // 4. Hero
    const hero = {
        _id: 'hero',
        _type: 'hero',
        mainHeading: 'Especialistas en Vehículos',
        slides: [
            { _key: '1', title: 'BMW', subtitle: 'Performance & Precision', color: '#0066B1' },
            { _key: '2', title: 'Mercedes', subtitle: 'Elegance & Innovation', color: '#c41e3a' },
            { _key: '3', title: 'Audi', subtitle: 'Vorsprung durch Technik', color: '#0066B1' },
        ],
        backgroundImage: heroImageId ? { _type: 'image', asset: { _type: 'reference', _ref: heroImageId } } : undefined
    }

    // 5. Services
    const services = {
        _id: 'services',
        _type: 'services',
        title: 'Nuestros Servicios',
        cards: [
            { _key: '1', title: 'Repuestos Originales', description: 'Originales y homologados de buena calidad.', icon: 'settings' },
            { _key: '2', title: 'Importación de Repuestos', description: 'Importamos repuestos y accesorios para su vehículo.', icon: 'package' },
            { _key: '3', title: 'Servicio Especializado', description: 'BMW, Mini Cooper, Mercedes Benz, Audi.', icon: 'wrench' }
        ]
    }

    // 6. Categories
    const categories = {
        _id: 'categories',
        _type: 'categories',
        heading: 'Lo Que Ofrecemos',
        subheading: 'Nuestros Servicios',
        description: 'Soluciones integrales para su vehículo alemán con la garantía de expertos.',
        services: [
            { _key: '1', number: '01', name: 'Repuestos Originales', description: 'Repuestos originales y homologados de buena calidad.', icon: 'settings' },
            { _key: '2', number: '02', name: 'Importación', description: 'Importamos repuestos y accesorios para su vehículo.', icon: 'package' },
            { _key: '3', number: '03', name: 'Servicio BMW', description: 'Servicio especializado en BMW y mecánica general.', icon: 'wrench' },
            { _key: '4', number: '04', name: 'Mini Cooper', description: 'Mantenimiento y reparación especializada para Mini Cooper.', icon: 'gauge' },
            { _key: '5', number: '05', name: 'Mercedes Benz', description: 'Diagnóstico y servicio técnico para Mercedes Benz.', icon: 'award' },
            { _key: '6', number: '06', name: 'Audi', description: 'Especialistas en la ingeniería y cuidado de Audi.', icon: 'zap' },
        ]
    }

    // 7. Featured
    const featured = {
        _id: 'featured',
        _type: 'featured',
        whyUsTitle: 'Experiencia y Conocimientos Garantizados',
        whyUsDescription: 'Rapidez y honestidad en los servicios que ofrecemos y repuestos que comercializamos son nuestra mejor recomendación.',
        whyUsImage: featuredImageId ? { _type: 'image', asset: { _type: 'reference', _ref: featuredImageId } } : undefined,
        values: [
            { _key: '1', title: 'Mecánicos Expertos', description: 'Técnicos y asesores especializados.', icon: 'users' },
            { _key: '2', title: 'Habilidades Técnicas', description: 'Equipo de trabajo siempre a su servicio.', icon: 'award' },
            { _key: '3', title: 'Servicio Garantizado', description: 'Repuestos garantizados para darle la seguridad.', icon: 'shield' },
            { _key: '4', title: 'Trabajo Confiable', description: 'Honestidad, confianza y seguridad.', icon: 'thumbs-up' },
        ],
        testimonialsTitle: 'Hablan Nuestros Clientes',
        testimonials: [
            { _key: '1', name: 'Daniel Villamizar', role: 'Comerciante', text: 'Excelente Servicio. Atención rápida.', rating: 5 },
            { _key: '2', name: 'Lucas Bernal', role: 'Diseñador Gráfico', text: 'Los repuestos que compré fueron entregados a tiempo.', rating: 5 },
            { _key: '3', name: 'Carolina Méndez', role: 'Empresaria', text: 'Increíble el nivel de conocimiento técnico.', rating: 5 },
        ]
    }

    console.log('Creating documents...')

    try {
        await client.createOrReplace(headerMenu)
        await client.createOrReplace(footerMenu)
        await client.createOrReplace(settings)
        await client.createOrReplace(hero)
        await client.createOrReplace(services)
        await client.createOrReplace(categories)
        await client.createOrReplace(featured)

        console.log('🎉 Full seed completed successfully!')
    } catch (error) {
        console.error('Seed failed:', error)
    }
}

seed()
