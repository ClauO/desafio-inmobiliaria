const propiedades_alquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Departamento planta baja con jardín',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Hermoso departamento con un patio perimetral enmallado, perfecto para el esparcimiento seguro y la salud visual de tu gatito.',
    ubicacion: '420 Green Path, Suburbia, CA 98765',
    habitaciones: 2,
    baños: 1,
    costo: 1800,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Loft moderno estilo Seúl',
    src: 'assets/img/loft-seul.png',
    descripcion: 'Un espacio de concepto abierto con ventanales amplios y suelo radiante, ideal para disfrutar de maratones de K-dramas.',
    ubicacion: '88 Gangnam Blvd, Ciudad Nueva, CA 10293',
    habitaciones: 1,
    baños: 1,
    costo: 1500,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Cabaña aislada en el bosque',
    src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Propiedad rústica rodeada de naturaleza oscura. Una excelente locación para una atmósfera de supervivencia.',
    ubicacion: '13 Dead End, Silent Woods, CA 66600',
    habitaciones: 3,
    baños: 2,
    costo: 2200,
    smoke: true,
    pets: true
  }
];

const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial con terminaciones de primer nivel.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Mansión clásica victoriana',
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Imponente propiedad de época con múltiples pasillos y un hall central que recuerda a escenarios de survival horror.',
    ubicacion: '1998 Spencer Mansion Rd, Arklay Mountains, CA 00198',
    habitaciones: 6,
    baños: 4,
    costo: 8500,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Penthouse Neo-Tokyo',
    src: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Espectacular penthouse con vistas iluminadas por luces de neón. Un refugio que evoca la estética de los años 80.',
    ubicacion: '2019 Akira Ave, Sector 4, CA 88990',
    habitaciones: 2,
    baños: 2,
    costo: 4500,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Estudio creativo minimalista',
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=60',
    descripcion: 'Acogedor espacio optimizado para desarrolladores. Excelente iluminación natural para largas sesiones de código.',
    ubicacion: '101 Developer Hub, Tech District, CA 10101',
    habitaciones: 1,
    baños: 1,
    costo: 3200,
    smoke: false,
    pets: true
  }
];


function renderPropiedades(arreglo, contenedorId, esPaginaPrincipal = false) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  let html = "";
  let contador = 0;

  for (const prop of arreglo) {
    if (esPaginaPrincipal && contador === 3) {
      break; 
    }

    const smokeHtml = prop.smoke
      ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
      : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;

    const petsHtml = prop.pets
      ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
      : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;


    html += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img src="${prop.src}" class="card-img-top" alt="Imagen de ${prop.nombre}" style="height: 200px; object-fit: cover;" />
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${prop.nombre}</h5>
          <p class="card-text">${prop.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.baños} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
          <div class="mt-auto">
            ${smokeHtml}
            ${petsHtml}
          </div>
        </div>
      </div>
    </div>`;

    contador++;
  }

  contenedor.innerHTML = html;
}

renderPropiedades(propiedades_venta, 'row-venta', true);
renderPropiedades(propiedades_alquiler, 'row-alquiler', true);

renderPropiedades(propiedades_venta, 'venta-row', false);
renderPropiedades(propiedades_alquiler, 'alquiler-row', false);