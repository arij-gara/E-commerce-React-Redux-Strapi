import React from 'react'
import './Categories.scss'
import {Link} from 'react-router-dom'
import "./Categories.scss"
export default function Categories() {
  return (
    <div className="Categories">
      <div className='col'>
        <div className="row">
        <img src='https://img.freepik.com/photos-gratuite/portrait-modele-assez-blonde-assise-table-pull-tricote-chaud-decontracte-blanc-bottes-elegantes_273443-2247.jpg?w=826&t=st=1673350616~exp=1673351216~hmac=b081df4fd48b6f426ff4ece44620c43fbeb93b4b9488ac2264700fc2464cb74e'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button>
                </div>
        <div className="row">
        <img src='https://img.freepik.com/photos-gratuite/portrait-mode-plein-air-elegante-femme-decontractee-chapeau-noir-costume-rose-chemisier-blanc-posant-vieille-rue_273443-1186.jpg?w=740&t=st=1673350424~exp=1673351024~hmac=0cb7f50681707cea6a2074835edf23a76e31c1ea98de7aa5f3691b8fa655076d'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button>
        </div>
      </div>
      <div className='col'>
      <div className="row">
      <img src='https://img.freepik.com/photos-gratuite/plan-femme-frisee-heureuse-pantalon-raye-sautant-mur-violet-portrait-interieur-fille-merveilleuse-lunettes-soleil-s-amuser_197531-5125.jpg?w=826&t=st=1673350496~exp=1673351096~hmac=3403de357777eaeef80a74edb422a7e842528a9ea9948cac6407c4b84fa3b4f5'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button>
      </div>
      </div>
      <div className='col col-l'>
      <div className="row">
      <div className="col">
      <div className="row">
      <img src='https://img.freepik.com/photos-gratuite/portrait-rue-mode-femme-brune-europeenne-elegante-manteau-cuir-posant-plein-air_273443-4581.jpg?w=826&t=st=1673349317~exp=1673349917~hmac=923dd121e7ddb8d0d5a9342e26a6f0c1f35acbb6d65bfd246b7907a929f3a7de'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button></div>
      </div>
      <div className="col">
      <div className="row">
      <img src='https://img.freepik.com/photos-gratuite/fille-guillerette-dans-lunettes-elegantes-regarde-etonnement-marchant-mur-rose-brunette-jupe-culotte-chemisier-orange-posant-sac-main-rouge_197531-14254.jpg?w=826&t=st=1673350269~exp=1673350869~hmac=f18ccb387586f7e9172e13a5163e34d1a80179c5b246f41c3144396e310960bb'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button></div>
      </div>
      </div>
      <div className="row">
      <img src='https://img.freepik.com/photos-gratuite/portrait-haute-couture-jeune-femme-blonde-elegante-au-chapeau-laine-noire-portant-poncho-franges-blanches-surdimensionne-longue-robe-grise_273443-3799.jpg?w=826&t=st=1673350310~exp=1673350910~hmac=fcea1f9b7333a71f583eeb692de55c5e2bd910e7b787e00c130d8a02af2fefe6'></img>
        <button>
            <Link className="link" to='/products/1'>Sales</Link>
        </button>
      </div>
      </div>
    </div>
  )
}
