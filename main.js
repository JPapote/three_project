import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

//Para dar profundida o modificar tamaño de la pantalla 
const camera = new THREE.PerspectiveCamera(75,  window.innerWidth / window.innerHeight, 0.1, 1000);

//renderiza el cambia con los todoas los cambios que vaya haciendo en el codigo
const renderer = new THREE.WebGL1Renderer({                                    //*
    canvas: document.querySelector('#bg')                                      //*
                                                                               //*
})                                                                             //* 
                                                                               //*  
renderer.setPixelRatio(window.devicePixelRatio)                                //*
//el tamaño del renderizado                                                    //*    
renderer.setSize(window.innerWidth, window.innerHeight)                        //*
//posicion de enfocque de la camara                                            //*
camera.position.setZ(30)                                                       //*
//agrega la scene y la camara al canvas                                        //* 
renderer.render(scene, camera)                                                 //*
//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*////*//*//*//*//*//*//*

//un dibujo de una dona, vienen por defecto en three
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
//color del objecto geometry y otras propiedades puedo agregar
// const material = new THREE.MeshBasicMaterial({color: 0xFF6347})

//Con MeshStandarMaterial puedo agregarle luz a distintas partes del objecto
const material = new THREE.MeshStandardMaterial({color: 0xFF6347})

//une el objeto con sus propiedades
const torus = new THREE.Mesh(geometry, material)

// const sol= new THREE.TextureLoader().load('sol.jpg')
// const textureSol= new THREE.TextureLoader().load('textureSol.jpg')

// const SolGeometry = new THREE.Mesh(
//     new THREE.SphereGeometry(12, 32, 32),
//     new THREE.MeshStandardMaterial({
//         map: sol,
//         normalMap: textureSol
//     })
// )
scene.add(torus)

//para que la luz salga desde un solo punto y por tanto solo ilumine una parte del objeto
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
// scene.add(pointLight)

//para que ilumine todo
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

//Me indica desde que punto viene la luz que puse en pointLight
// const helperLight = new THREE.PointLightHelper(pointLight)

// // para agregar piso cuadriculado
// const gridLight = new THREE.GridHelper(200, 50)
// scene.add(helperLight, gridLight)


const controls = new OrbitControls(camera, renderer.domElement)

//agregar estrellas a mi sistema
function addStar() {
    const geometry  = new THREE.SphereGeometry(0.25, 24, 24)
    const material = new THREE.MeshStandardMaterial({color: 0xffffff})

    const star = new THREE.Mesh(geometry, material)

    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

    star.position.set(x, y, z)

    scene.add(star)
}

Array(100).fill().forEach(addStar)

//para cargar alguna imagen
const spaceTexture = new THREE.TextureLoader().load('img_space_plane/space.jpeg')

scene.background = spaceTexture




const tierra= new THREE.TextureLoader().load('img_space_plane/tierra.jpg')

const tierraGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 32, 32),
    new THREE.MeshStandardMaterial({
        map: tierra,
    })
)

scene.add(tierraGeometry)


const mercurio= new THREE.TextureLoader().load('img_space_plane/mercurio.png')

const mercurioGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32),
    new THREE.MeshStandardMaterial({
        map: mercurio,
        
    })
)

scene.add(mercurioGeometry)


const venus = new THREE.TextureLoader().load('img_space_plane/venus.jpg')

const venusGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
        map: venus,
    })
)

scene.add(venusGeometry)

const marte = new THREE.TextureLoader().load('img_space_plane/marte.jpg')

const marteGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(2, 32, 32),
    new THREE.MeshStandardMaterial({
        map: marte,
        
    })
)

scene.add(marteGeometry)


const jupiter = new THREE.TextureLoader().load('img_space_plane/jupiter.jpg')

const jupiterGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshStandardMaterial({
        map: jupiter,
      
    })
)

scene.add(jupiterGeometry)

const saturno = new THREE.TextureLoader().load('img_space_plane/saturno.jpg')

const saturnoGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshStandardMaterial({
        map: saturno,
      
    })
)

scene.add(saturnoGeometry)

const urano = new THREE.TextureLoader().load('img_space_plane/urano.jpg')

const uranoGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshStandardMaterial({
        map: urano,

    })
)

scene.add(uranoGeometry)

const neptuno = new THREE.TextureLoader().load('img_space_plane/neptuno.jpg')

const neptunoGeometry = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshStandardMaterial({
        map: neptuno,
    })
)

scene.add(neptunoGeometry)

//para mover la camara cuando haga scrooll
function moveCamera(){
    const t = document.body.getBoundingClientRect().top
    camera.position.y = t * -0.08
}

document.body.onscroll = moveCamera

function rotation(planeta, radio){
    const timer = Date.now() / radio * 0.03;
    planeta.position.set(
					Math.cos( timer * 0.1 ) * radio,
					Math.sin( timer * 0.1 ) * radio
				);
}
function animate(){
    requestAnimationFrame(animate);
    marteGeometry.rotation.y += 0.005
    tierraGeometry.rotation.y += 0.005
    mercurioGeometry.rotation.y += 0.005
    venusGeometry.rotation.y += 0.005
    jupiterGeometry.rotation.y += 0.005
    uranoGeometry.rotation.y += 0.005
    neptunoGeometry.rotation.y += 0.005
    saturnoGeometry.rotation.y += 0.005

    rotation(mercurioGeometry, 20)
    rotation(venusGeometry, 30)
    rotation(tierraGeometry, 45)
    rotation(marteGeometry, 60)
    rotation(jupiterGeometry, 75)
    rotation(saturnoGeometry, 85)
    rotation(uranoGeometry, 100)
    rotation(neptunoGeometry, 120)

    torus.rotation.x += 0.01
    torus.rotation.y += 0.005
    torus.rotation.z += 0.01

    controls.update()
    renderer.render(scene, camera)
}
animate()

//Los objectos se guardan en scene