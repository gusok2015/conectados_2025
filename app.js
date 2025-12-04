// Data Structure
const educationData = {
    universidadesPublicas: [
        {
            nombre: 'Universidad Nacional de Cuyo (UNCUYO)',
            tipo: 'Universidad Pública',
            gratuita: true,
            descripcion: 'Principal universidad pública de Mendoza con 12 facultades',
            carreras: [
                'Artes y Diseño', 'Ciencias Agrarias', 'Ciencias Aplicadas a la Industria',
                'Ciencias Exactas y Naturales', 'Ciencias Médicas', 'Ciencias Políticas y Sociales',
                'Derecho', 'Educación', 'Filosofía y Letras', 'Ingeniería', 'Odontología'
            ],
            areas: ['Artes y Diseño', 'Salud', 'Ingeniería y Tecnología', 'Educación', 'Derecho'],
            web: 'www.uncuyo.edu.ar',
            inscripciones: 'Variable según facultad (julio-septiembre 2025)',
            icon: '🎓',
            color: '#6366f1'
        },
        {
            nombre: 'UTN - Facultad Regional Mendoza',
            tipo: 'Universidad Pública',
            gratuita: true,
            descripcion: 'Universidad Tecnológica Nacional, especializada en ingenierías',
            carreras: [
                'Ingeniería Electrónica', 'Ingeniería en Informática', 'Ingeniería Industrial',
                'Ingeniería Civil', 'Ingeniería Química'
            ],
            areas: ['Ingeniería y Tecnología'],
            web: 'www4.frm.utn.edu.ar',
            inscripciones: 'Consultar en la institución',
            icon: '⚙️',
            color: '#06b6d4'
        },
        {
            nombre: 'Instituto Tecnológico Universitario (ITU-UNCUYO)',
            tipo: 'Universidad Pública',
            gratuita: true,
            descripcion: 'Tecnicaturas universitarias cortas de 2.5 años con orientación laboral',
            carreras: [
                'Marketing', 'Desarrollo de Software', 'Producción Industrial y Automatización',
                'Higiene y Seguridad en el Trabajo', 'Gestión de Empresas',
                'Logística y Transporte', 'Redes de Datos y Telecomunicaciones'
            ],
            sedes: ['Ciudad', 'Luján de Cuyo', 'Rivadavia', 'Junín', 'Tunuyán', 'General Alvear', 'San Rafael'],
            areas: ['Ingeniería y Tecnología', 'Economía y Gestión'],
            web: 'www.itu.uncu.edu.ar',
            inscripciones: '23 noviembre - 3 diciembre 2024',
            icon: '💻',
            color: '#06b6d4',
            duracion: '2.5 años'
        }
    ],
    universidadesPrivadas: [
        {
            nombre: 'Universidad de Mendoza (UM)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: '65 años de trayectoria, más de 11.000 estudiantes',
            carreras: [
                'Medicina', 'Odontología', 'Kinesiología', 'Nutrición', 'Derecho',
                'Arquitectura', 'Ingenierías diversas', 'Diseño de Indumentaria'
            ],
            sedes: ['Mendoza', 'San Rafael', 'Río Cuarto'],
            areas: ['Salud', 'Derecho', 'Ingeniería y Tecnología', 'Artes y Diseño'],
            web: 'www.um.edu.ar',
            costo: '$7.000-9.300 mensual',
            icon: '🏛️',
            color: '#ec4899'
        },
        {
            nombre: 'Universidad Juan Agustín Maza (UMaza)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: 'Reconocida internacionalmente en Enología y Ciencias de la Salud',
            carreras: [
                'Enología', 'Farmacia', 'Medicina Veterinaria', 'Kinesiología',
                'Nutrición', 'Realización Audiovisual'
            ],
            sedes: ['Gran Mendoza', 'Valle de Uco', 'Este', 'Sur'],
            areas: ['Alimentos y Enología', 'Salud'],
            web: 'www.umaza.edu.ar',
            icon: '🍷',
            color: '#eab308'
        },
        {
            nombre: 'Universidad del Aconcagua (UDA)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: 'Especializada en Ciencias de la Salud y Psicología',
            carreras: [
                'Psicología', 'Medicina', 'Fonoaudiología', 'Marketing',
                'Turismo', 'Abogacía'
            ],
            areas: ['Salud', 'Economía y Gestión', 'Derecho', 'Turismo y Hotelería'],
            web: 'www.uda.edu.ar',
            icon: '🏔️',
            color: '#10b981'
        },
        {
            nombre: 'Universidad Champagnat (UCH)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: 'Enfoque en Educación, Diseño y Tecnología',
            carreras: [
                'Sistemas de Información', 'Diseño', 'Abogacía', 'Turismo',
                'Profesorado Educación Primaria', 'Profesorado Educación Inicial'
            ],
            areas: ['Educación', 'Artes y Diseño', 'Ingeniería y Tecnología', 'Derecho'],
            web: 'www.uch.edu.ar',
            icon: '📚',
            color: '#f97316'
        },
        {
            nombre: 'Universidad Católica Argentina (UCA)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: 'Universidad católica con amplia oferta académica',
            carreras: [
                'Medicina', 'Ingenierías', 'Psicología', 'Abogacía', 'Comunicación'
            ],
            areas: ['Salud', 'Ingeniería y Tecnología', 'Derecho', 'Educación'],
            web: 'www.uca.edu.ar',
            icon: '✝️',
            color: '#944454'
        },
        {
            nombre: 'Universidad Católica de Cuyo (UCC)',
            tipo: 'Universidad Privada',
            gratuita: false,
            descripcion: 'Facultad Don Bosco - Cuna de la Enología Argentina (fundada 1965)',
            carreras: [
                'Licenciatura en Enología (4 años)', 'Tecnología de Alimentos (4 años)',
                'Bromatología (3 años)', 'Sommelier (2 años)'
            ],
            areas: ['Alimentos y Enología'],
            web: 'www.uccuyomza.edu.ar',
            caracteristicaEspecial: 'Primera facultad de Latinoamérica en Enología',
            icon: '🍇',
            color: '#eab308'
        }
    ],
    institutosTerciarios: [
        {
            nombre: 'Instituto San Agustín',
            tipo: 'Instituto Terciario Privado',
            gratuita: false,
            descripcion: 'Especializado en carreras de Salud',
            carreras: [
                'Anestesiología', 'Enfermería Profesional', 'Instrumentación Quirúrgica',
                'Radiología e Imágenes', 'Laboratorio de Análisis Clínicos', 'Cosmetología y Estética'
            ],
            areas: ['Salud'],
            web: 'instsanagustin.com',
            duracion: '3 años',
            icon: '🏥',
            color: '#ec4899'
        },
        {
            nombre: 'UTHGRA - Instituto de Educación Superior',
            tipo: 'Instituto Terciario Privado',
            gratuita: false,
            descripcion: 'Especializado en Gastronomía y Hotelería',
            carreras: ['Gastronomía', 'Cursos de oficios'],
            areas: ['Turismo y Hotelería'],
            web: 'uthgramendoza.com.ar',
            novedad2025: true,
            icon: '👨‍🍳',
            color: '#f97316'
        },
        {
            nombre: 'EIM (Escuela Industrias y Manufacturas)',
            tipo: 'Instituto Terciario Privado',
            gratuita: false,
            descripcion: 'Carreras en Gastronomía y Turismo',
            carreras: ['Gastronomía', 'Turismo y Hotelería'],
            areas: ['Turismo y Hotelería'],
            web: 'eim.esc.edu.ar',
            icon: '🍽️',
            color: '#f59e0b'
        },
        {
            nombre: 'Institutos Terciarios Estatales de Mendoza',
            tipo: 'Instituto Terciario Estatal',
            gratuita: true,
            descripcion: 'Red de institutos públicos en toda la provincia con nuevas carreras tecnológicas',
            carreras: [
                'Desarrollo de Software (2025)', 'Ciencia de Datos e Inteligencia Artificial (2025)',
                'Redes y Ciberseguridad (2025)', 'Educación Primaria', 'Educación Especial',
                'Inglés', 'Informática', 'Lengua y Literatura', 'Matemática (con becas)',
                'Enfermería Profesional'
            ],
            sedes: [
                'IES 9-007 (General Alvear)', 'IES 9-008 Manuel Belgrano (Godoy Cruz)',
                'IES 9-010 (Eugenia Bustos)', 'IES 9-012 (San Rafael)',
                'IES 9-021 (Junín)', 'IES 9-023 (Maipú)', 'IES 9-024 (Lavalle)'
            ],
            areas: ['Ingeniería y Tecnología', 'Educación', 'Salud'],
            caracteristicasEspeciales: [
                'Primer año común para carreras tecnológicas',
                'Certificación internacional de inglés nivel B1',
                'Salida laboral inmediata',
                'Sueldos hasta USD 6.000 en tecnología'
            ],
            icon: '🏫',
            color: '#06b6d4',
            duracion: '3 años'
        }
    ]
};

const areasDeEstudio = [
    {
        nombre: 'Salud',
        icon: '⚕️',
        color: '#ec4899',
        carreras: [
            'Medicina', 'Odontología', 'Kinesiología', 'Enfermería', 'Nutrición',
            'Fonoaudiología', 'Psicología', 'Farmacia', 'Medicina Veterinaria',
            'Enfermería Profesional', 'Anestesiología', 'Instrumentación Quirúrgica',
            'Radiología e Imágenes', 'Laboratorio de Análisis Clínicos', 'Cosmetología y Estética'
        ]
    },
    {
        nombre: 'Ingeniería y Tecnología',
        icon: '💻',
        color: '#06b6d4',
        carreras: [
            'Ingeniería Civil', 'Ingeniería Electrónica', 'Ingeniería Industrial',
            'Ingeniería Informática', 'Ingeniería Química', 'Desarrollo de Software',
            'Redes y Ciberseguridad', 'Ciencia de Datos e IA', 'Sistemas de Información',
            'Producción Industrial y Automatización', 'Redes de Datos y Telecomunicaciones'
        ]
    },
    {
        nombre: 'Educación',
        icon: '📚',
        color: '#f97316',
        carreras: [
            'Profesorado Educación Inicial', 'Profesorado Educación Primaria',
            'Profesorado Educación Especial', 'Profesorado de Matemática',
            'Profesorado de Inglés', 'Profesorado de Informática',
            'Profesorado de Lengua y Literatura'
        ]
    },
    {
        nombre: 'Economía y Gestión',
        icon: '💼',
        color: '#10b981',
        carreras: [
            'Contador Público', 'Administración de Empresas', 'Marketing',
            'Comercio Internacional', 'Gestión de Empresas', 'Logística y Transporte',
            'Higiene y Seguridad en el Trabajo'
        ]
    },
    {
        nombre: 'Derecho',
        icon: '⚖️',
        color: '#6366f1',
        carreras: ['Abogacía', 'Ciencias Políticas y Sociales']
    },
    {
        nombre: 'Artes y Diseño',
        icon: '🎨',
        color: '#a855f7',
        carreras: [
            'Arquitectura', 'Diseño Gráfico', 'Diseño de Indumentaria',
            'Artes Visuales', 'Diseño', 'Realización Audiovisual'
        ]
    },
    {
        nombre: 'Alimentos y Enología',
        icon: '🍷',
        color: '#eab308',
        carreras: [
            'Enología', 'Tecnología de Alimentos', 'Bromatología',
            'Sommelier', 'Gastronomía', 'Ciencias Agrarias'
        ]
    },
    {
        nombre: 'Turismo y Hotelería',
        icon: '✈️',
        color: '#f59e0b',
        carreras: ['Turismo', 'Hotelería', 'Gastronomía']
    }
];

const novedades2025 = [
    {
        titulo: 'Desarrollo de Software - Plan Renovado',
        descripcion: 'Tecnicatura de 3 años con primer año común, certificación de inglés B1 y salida laboral inmediata.',
        institucion: 'Institutos Terciarios Estatales',
        icon: '💻',
        detalles: ['3 años de duración', 'Gratuita', 'Certificación internacional B1', 'Sueldos hasta USD 6.000']
    },
    {
        titulo: 'Ciencia de Datos e Inteligencia Artificial',
        descripcion: 'Nueva carrera 2025 enfocada en las tecnologías del futuro.',
        institucion: 'Institutos Terciarios Estatales',
        icon: '🤖',
        detalles: ['3 años de duración', 'Gratuita', 'Primera año común con Software', 'Alta demanda laboral']
    },
    {
        titulo: 'Redes y Ciberseguridad',
        descripcion: 'Nueva carrera 2025 para formar expertos en seguridad informática.',
        institucion: 'Institutos Terciarios Estatales',
        icon: '🔒',
        detalles: ['3 años de duración', 'Gratuita', 'Certificación B1 en inglés', 'Área de alta demanda']
    },
    {
        titulo: 'Programa de Becas Provinciales',
        descripcion: 'Incentivo económico para carreras docentes prioritarias.',
        institucion: 'Dirección General de Escuelas',
        icon: '💰',
        detalles: ['Profesorados de Matemática, Física y Química', 'Apoyo económico mensual', 'Requisitos en DGE']
    },
    {
        titulo: 'Gastronomía en UTHGRA',
        descripcion: 'Nueva carrera en el Instituto de Educación Superior de UTHGRA.',
        institucion: 'UTHGRA',
        icon: '👨‍🍳',
        detalles: ['Nueva en 2025', 'Cursos de oficios incluidos', 'Enfoque práctico']
    },
    {
        titulo: 'Nuevas Sedes ITU',
        descripcion: 'El Instituto Tecnológico Universitario expande a San Rafael con nuevas tecnicaturas.',
        institucion: 'ITU-UNCUYO',
        icon: '📍',
        detalles: ['7 sedes en toda la provincia', 'Inscripción: 23 nov - 3 dic', 'Tecnicaturas de 2.5 años']
    }
];

// Global state
let allInstitutions = [];
let currentView = 'explorer';
let selectedInstitution = null;
let activeFilters = {
    tipo: [],
    area: [],
    costo: []
};

// Initialize app
function init() {
    // Combine all institutions
    allInstitutions = [
        ...educationData.universidadesPublicas,
        ...educationData.universidadesPrivadas,
        ...educationData.institutosTerciarios
    ];
    
    // Setup filters
    setupFilters();
    
    // Render initial view
    renderInstitutions();
    
    // Setup search
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Setup scroll button
    window.addEventListener('scroll', handleScroll);
}

// Setup filter checkboxes
function setupFilters() {
    // Tipo filters
    const tipos = ['Universidad Pública', 'Universidad Privada', 'Instituto Terciario Estatal', 'Instituto Terciario Privado'];
    const tipoContainer = document.getElementById('tipoFilters');
    tipos.forEach(tipo => {
        tipoContainer.innerHTML += `
            <div class="filter-option">
                <input type="checkbox" id="tipo-${tipo}" value="${tipo}" onchange="handleFilterChange('tipo', '${tipo}')">
                <label for="tipo-${tipo}">${tipo}</label>
            </div>
        `;
    });
    
    // Area filters
    const areaContainer = document.getElementById('areaFilters');
    areasDeEstudio.forEach(area => {
        areaContainer.innerHTML += `
            <div class="filter-option">
                <input type="checkbox" id="area-${area.nombre}" value="${area.nombre}" onchange="handleFilterChange('area', '${area.nombre}')">
                <label for="area-${area.nombre}">${area.nombre}</label>
            </div>
        `;
    });
    
    // Costo filters
    const costoContainer = document.getElementById('costoFilters');
    const costos = ['Gratuitas', 'Aranceladas'];
    costos.forEach(costo => {
        costoContainer.innerHTML += `
            <div class="filter-option">
                <input type="checkbox" id="costo-${costo}" value="${costo}" onchange="handleFilterChange('costo', '${costo}')">
                <label for="costo-${costo}">${costo}</label>
            </div>
        `;
    });
}

// Handle filter changes
function handleFilterChange(filterType, value) {
    const index = activeFilters[filterType].indexOf(value);
    if (index > -1) {
        activeFilters[filterType].splice(index, 1);
    } else {
        activeFilters[filterType].push(value);
    }
    renderInstitutions();
}

// Reset filters
function resetFilters() {
    activeFilters = {
        tipo: [],
        area: [],
        costo: []
    };
    
    // Uncheck all checkboxes
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    // Clear search
    document.getElementById('searchInput').value = '';
    
    renderInstitutions();
}

// Handle search
function handleSearch(e) {
    renderInstitutions(e.target.value.toLowerCase());
}

// Filter institutions
function filterInstitutions(searchTerm = '') {
    return allInstitutions.filter(inst => {
        // Search filter
        if (searchTerm) {
            const searchableText = (
                inst.nombre + ' ' +
                inst.descripcion + ' ' +
                inst.carreras.join(' ') + ' ' +
                inst.areas.join(' ')
            ).toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Tipo filter
        if (activeFilters.tipo.length > 0) {
            if (!activeFilters.tipo.includes(inst.tipo)) {
                return false;
            }
        }
        
        // Area filter
        if (activeFilters.area.length > 0) {
            const hasArea = inst.areas.some(area => activeFilters.area.includes(area));
            if (!hasArea) {
                return false;
            }
        }
        
        // Costo filter
        if (activeFilters.costo.length > 0) {
            if (activeFilters.costo.includes('Gratuitas') && !inst.gratuita) {
                return false;
            }
            if (activeFilters.costo.includes('Aranceladas') && inst.gratuita) {
                return false;
            }
        }
        
        return true;
    });
}

// Render institutions
function renderInstitutions(searchTerm = '') {
    const filtered = filterInstitutions(searchTerm);
    const grid = document.getElementById('institutionsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'institución encontrada' : 'instituciones encontradas'}`;
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-light);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.3;"></i>
                <h3>No se encontraron resultados</h3>
                <p>Intentá con otros filtros o términos de búsqueda</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(inst => `
        <div class="card" onclick="showInstitutionDetail('${inst.nombre}')">
            <div class="card-icon" style="background: ${inst.color}20; color: ${inst.color};">
                ${inst.icon}
            </div>
            <h3 class="card-title">${inst.nombre}</h3>
            <span class="card-type ${inst.gratuita ? 'type-publica' : 'type-privada'}">
                ${inst.tipo}
            </span>
            <p class="card-description">${inst.descripcion}</p>
            <div class="card-areas">
                ${inst.areas.slice(0, 3).map(area => `<span class="area-badge">${area}</span>`).join('')}
                ${inst.areas.length > 3 ? `<span class="area-badge">+${inst.areas.length - 3} más</span>` : ''}
            </div>
            <button class="card-button">
                <i class="fas fa-arrow-right"></i> Ver Carreras
            </button>
        </div>
    `).join('');
}

// Show institution detail
function showInstitutionDetail(nombre) {
    const inst = allInstitutions.find(i => i.nombre === nombre);
    if (!inst) return;
    
    selectedInstitution = inst;
    
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="detail-view">
            <div class="detail-header">
                <div class="detail-icon" style="background: ${inst.color}20; color: ${inst.color};">
                    ${inst.icon}
                </div>
                <div>
                    <h2 class="detail-title">${inst.nombre}</h2>
                    <span class="card-type ${inst.gratuita ? 'type-publica' : 'type-privada'}">
                        ${inst.tipo}
                    </span>
                </div>
            </div>
            
            <div class="detail-section">
                <p style="font-size: 1.1rem; color: var(--color-text-light); line-height: 1.8;">
                    ${inst.descripcion}
                </p>
            </div>
            
            <div class="info-grid">
                ${inst.web ? `
                    <div class="info-item">
                        <i class="fas fa-globe"></i>
                        <div class="info-item-content">
                            <strong>Sitio Web</strong>
                            <a href="https://${inst.web}" target="_blank">${inst.web}</a>
                        </div>
                    </div>
                ` : ''}
                
                ${inst.gratuita ? `
                    <div class="info-item">
                        <i class="fas fa-check-circle"></i>
                        <div class="info-item-content">
                            <strong>Costo</strong>
                            <div>Gratuita</div>
                        </div>
                    </div>
                ` : ''}
                
                ${inst.costo ? `
                    <div class="info-item">
                        <i class="fas fa-dollar-sign"></i>
                        <div class="info-item-content">
                            <strong>Costo Estimado</strong>
                            <div>${inst.costo}</div>
                        </div>
                    </div>
                ` : ''}
                
                ${inst.duracion ? `
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <div class="info-item-content">
                            <strong>Duración</strong>
                            <div>${inst.duracion}</div>
                        </div>
                    </div>
                ` : ''}
                
                ${inst.inscripciones ? `
                    <div class="info-item">
                        <i class="fas fa-calendar"></i>
                        <div class="info-item-content">
                            <strong>Inscripciones</strong>
                            <div>${inst.inscripciones}</div>
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="detail-section">
                <h3>Carreras Ofrecidas</h3>
                <div class="career-list">
                    ${inst.carreras.map(carrera => `
                        <div class="career-item">
                            <i class="fas fa-graduation-cap" style="color: var(--color-primary); margin-right: 8px;"></i>
                            <strong>${carrera}</strong>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${inst.sedes ? `
                <div class="detail-section">
                    <h3>Sedes y Ubicaciones</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${inst.sedes.map(sede => `
                            <span class="area-badge" style="background: ${inst.color}20; color: ${inst.color};">
                                <i class="fas fa-map-marker-alt"></i> ${sede}
                            </span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${inst.caracteristicaEspecial ? `
                <div class="detail-section">
                    <div style="background: var(--color-bg-light); padding: 20px; border-radius: var(--radius-md); border-left: 4px solid ${inst.color};">
                        <strong style="color: ${inst.color};">⭐ Característica Especial:</strong>
                        <p style="margin: 8px 0 0 0; color: var(--color-text-light);">${inst.caracteristicaEspecial}</p>
                    </div>
                </div>
            ` : ''}
            
            ${inst.caracteristicasEspeciales ? `
                <div class="detail-section">
                    <h3>Características Destacadas</h3>
                    <div class="career-list">
                        ${inst.caracteristicasEspeciales.map(car => `
                            <div class="career-item">
                                <i class="fas fa-star" style="color: #FFD700; margin-right: 8px;"></i>
                                ${car}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('explorer-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close detail view
function closeDetail() {
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('explorer-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show view
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(view => {
        view.classList.add('hidden');
    });
    
    // Update active tab
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewName}"]`)?.classList.add('active');
    
    currentView = viewName;
    
    // Show selected view
    switch(viewName) {
        case 'explorer':
            document.getElementById('explorer-view').classList.remove('hidden');
            break;
        case 'areas':
            document.getElementById('areas-view').classList.remove('hidden');
            renderAreasGrid();
            break;
        case 'novedades':
            document.getElementById('novedades-view').classList.remove('hidden');
            renderNovedades();
            break;
        case 'info':
            document.getElementById('info-view').classList.remove('hidden');
            break;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render areas grid
function renderAreasGrid() {
    const grid = document.getElementById('areasGrid');
    grid.innerHTML = areasDeEstudio.map(area => `
        <div class="area-card area-${area.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ó/g, 'o').replace(/í/g, 'i')}" 
             onclick="showAreaDetail('${area.nombre}')">
            <div class="area-card-icon">${area.icon}</div>
            <h3 class="area-card-title">${area.nombre}</h3>
            <p class="area-card-count">${area.carreras.length} carreras disponibles</p>
        </div>
    `).join('');
}

// Show area detail
function showAreaDetail(areaNombre) {
    const area = areasDeEstudio.find(a => a.nombre === areaNombre);
    if (!area) return;
    
    const institutions = allInstitutions.filter(inst => 
        inst.areas.includes(areaNombre)
    );
    
    const detailContent = document.getElementById('areaDetailContent');
    detailContent.innerHTML = `
        <div class="detail-view">
            <div class="detail-header">
                <div class="detail-icon" style="background: ${area.color}20; color: ${area.color};">
                    ${area.icon}
                </div>
                <div>
                    <h2 class="detail-title">${area.nombre}</h2>
                    <p style="color: var(--color-text-light); margin-top: 8px;">
                        ${area.carreras.length} carreras disponibles en ${institutions.length} instituciones
                    </p>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Carreras en esta Área</h3>
                <div class="career-list">
                    ${area.carreras.map(carrera => `
                        <div class="career-item">
                            <i class="fas fa-graduation-cap" style="color: ${area.color}; margin-right: 8px;"></i>
                            <strong>${carrera}</strong>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h3>Instituciones que Ofrecen Estas Carreras</h3>
                <div class="cards-grid">
                    ${institutions.map(inst => `
                        <div class="card" onclick="showInstitutionDetail('${inst.nombre}'); showView('explorer');">
                            <div class="card-icon" style="background: ${inst.color}20; color: ${inst.color};">
                                ${inst.icon}
                            </div>
                            <h3 class="card-title">${inst.nombre}</h3>
                            <span class="card-type ${inst.gratuita ? 'type-publica' : 'type-privada'}">
                                ${inst.tipo}
                            </span>
                            <p class="card-description">${inst.descripcion}</p>
                            <button class="card-button">Ver Detalles</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('areas-view').classList.add('hidden');
    document.getElementById('area-detail-view').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render novedades
function renderNovedades() {
    const grid = document.getElementById('novedadesGrid');
    grid.innerHTML = novedades2025.map(novedad => `
        <div class="novedad-card">
            <div style="font-size: 2.5rem; margin-bottom: 16px;">${novedad.icon}</div>
            <h4>${novedad.titulo}</h4>
            <p>${novedad.descripcion}</p>
            <p style="font-weight: 600; color: var(--color-primary); margin-top: 12px;">
                ${novedad.institucion}
            </p>
            <div style="margin-top: 16px;">
                ${novedad.detalles.map(detalle => `
                    <div style="padding: 6px 0; font-size: 0.85rem; color: var(--color-text-light);">
                        <i class="fas fa-check-circle" style="color: var(--color-success); margin-right: 6px;"></i>
                        ${detalle}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Scroll functions
function scrollToExplorer() {
    showView('explorer');
    setTimeout(() => {
        const searchSection = document.querySelector('.search-section');
        if (searchSection) {
            searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Theme Management
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Update icon and text
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (isDarkMode) {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Modo Claro';
    } else {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Modo Oscuro';
    }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);