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
        address: 'Calle 63C # 28A - 72, Bogotá, Colombia',
        footerDescription: 'Taller automotriz especializado en vehículos alemanes. BMW, Mercedes Benz, Audi, Volkswagen y Mini Cooper.',
        schedule: [
            'Lun - Vie: 8:00 - 17:00',
            'Sábado: 8:30 - 15:00'
        ],
        socials: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com'
        },
        headerMenu: { _type: 'reference', _ref: 'header-menu' },
        footerMenu: { _type: 'reference', _ref: 'footer-menu' },
        logo: logoAssetId ? { _type: 'image', asset: { _type: 'reference', _ref: logoAssetId } } : undefined
    }

    // 4. Hero
    const hero = {
        _id: 'hero',
        _type: 'hero',
        mainHeading: 'Especialistas en Vehículos',
        description: 'Taller automotriz especializado en BMW, Mercedes Benz, Audi, Volkswagen y Mini Cooper.',
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
        ctaTitle: '¿Necesita una revisión de su vehículo?',
        ctaDescription: 'Reserve una cita para diagnóstico, reparación o mantenimiento.',
        ctaButtonText: 'Solicitar Cita',
        services: [
            { _key: '1', number: '01', name: 'Mantenimiento Preventivo', description: 'Mantenimiento preventivo y correctivo con honestidad y garantía en el servicio.', icon: 'wrench' },
            { _key: '2', number: '02', name: 'Repuestos Originales', description: 'Importamos y comercializamos repuestos originales, nuevos o usados a nivel nacional.', icon: 'settings' },
            { _key: '3', number: '03', name: 'Suspensión y Amortiguadores', description: 'Equilibrio en las cargas de su vehículo con amortiguadores originales.', icon: 'gauge' },
            { _key: '4', number: '04', name: 'Diagnóstico Express', description: 'Escáner, cambio de aceite, pastillas, batería o filtros. Atención rápida y efectiva.', icon: 'zap' },
            { _key: '5', number: '05', name: 'Aire Acondicionado', description: 'Mantenimiento, cambio de filtros, diagnóstico y recarga del sistema de A/C.', icon: 'wind' },
            { _key: '6', number: '06', name: 'Alineación y Balanceo', description: 'Ajuste y cambio de neumáticos y rines para prolongar su vida útil.', icon: 'circle-dot' },
        ]
    }

    // 7. Featured
    const featured = {
        _id: 'featured',
        _type: 'featured',
        whyUsSubtitle: 'Somos Los Mejores',
        whyUsTitle: 'Experiencia y Conocimientos Garantizados',
        whyUsDescription: 'Rapidez y honestidad en los servicios que ofrecemos y repuestos que comercializamos son nuestra mejor recomendación.',
        whyUsImage: featuredImageId ? { _type: 'image', asset: { _type: 'reference', _ref: featuredImageId } } : undefined,
        values: [
            { _key: '1', title: 'Mecánicos Expertos', description: 'Técnicos y asesores especializados en marcas de autos alemanes.', icon: 'users' },
            { _key: '2', title: 'Habilidades Técnicas', description: 'Equipo de trabajo siempre a su servicio para ofrecerle asesoría gratuita.', icon: 'award' },
            { _key: '3', title: 'Servicio Garantizado', description: 'Repuestos garantizados para darle la seguridad de que compra lo mejor.', icon: 'shield' },
            { _key: '4', title: 'Trabajo Confiable', description: 'Honestidad, confianza y seguridad para nuestros clientes y aliados.', icon: 'thumbs-up' },
        ],
        testimonialsSubtitle: 'Testimonios',
        testimonialsTitle: 'Hablan Nuestros Clientes',
        testimonials: [
            { _key: '1', name: 'Daniel Villamizar', role: 'Comerciante', text: 'Excelente Servicio. Atención rápida. El precio es ajustado al servicio y repuestos que ofrecieron.', rating: 5 },
            { _key: '2', name: 'Lucas Bernal', role: 'Diseñador Gráfico', text: 'Los repuestos que compré fueron entregados a tiempo y en óptimas condiciones. Y tienen buen descuento.', rating: 5 },
            { _key: '3', name: 'Carolina Méndez', role: 'Empresaria', text: 'Increíble el nivel de conocimiento técnico. Diagnosticaron el problema de mi BMW en minutos.', rating: 5 },
        ],
        ctaTitle: '¡Llámenos Ya o Visítenos!',
        ctaDescription: 'Estamos listos para atender sus necesidades de mantenimiento y repuestos.',
        ctaPhoneText: 'Llamar Ya'
    }

    // 8. Contact
    const contact = {
        _id: 'contact',
        _type: 'contact',
        sectionSubtitle: 'Contáctenos',
        sectionTitle: 'Estamos Aquí Para Ayudarle',
        sectionDescription: 'Agenda tu cita o contáctanos para cualquier consulta sobre tu vehículo alemán',
        phoneTitle: 'Teléfonos',
        emailTitle: 'Email',
        scheduleTitle: 'Horario',
        locationTitle: 'Ubicación',
        whatsappTitle: 'Respuesta Inmediata',
        whatsappDescription: 'Contáctanos por WhatsApp para atención rápida',
        whatsappButtonText: 'WhatsApp',
        formTitle: 'Envíanos un Mensaje',
        formDescription: 'Completa el formulario y te contactaremos pronto',
        formButtonText: 'Enviar Mensaje'
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
        await client.createOrReplace(contact)

        console.log('🎉 Full seed completed successfully!')
    } catch (error) {
        console.error('Seed failed:', error)
    }
}

seed()
