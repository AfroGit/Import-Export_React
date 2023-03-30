import './App.css'

import { getImageUrl } from './utils.js';

function Profile({person, imageSize= 100}){
  const imageSrc = getImageUrl(person.imageId)

  return(
    <section className="profile">
<h2>{person.name}</h2>
<img 
  className="avatar"
  src={imageSrc}
  alt={person.name}
  width={imageSize}
  height={imageSize}
/>
<ul>
  <li>
    <b>Profession: </b> {person.profession}
   
  </li>
  <li>
    <b>Awards: {person.awards.length} </b> 
    ({person.awards.join(', ')})
    
  </li>
  <li>
    <b>Discovered: </b>
    {person.discovery}
  </li>
</ul>
</section>

  );

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile person={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          ' Davy Medal',
          'Matteucci Medal'
          
        ]
      }} />
{/*       <Profile /> */}
      
    </div>
  );
}



// <section className="profile">
// <h2>Maria Skłodowska-Curie</h2>
// <img 
//   className="avatar"
//   src={getImageUrl('szV5sdG')}
//   alt="Maria Skłodowska-Curie"
//   width={70}
//   height={70}
// />
// <ul>
//   <li>
//     <b>Profession: </b> 
//     physicist and chemist
//   </li>
//   <li>
//     <b>Awards: 4 </b> 
//     (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//   </li>
//   <li>
//     <b>Discovered: </b>
//     polonium (element)
//   </li>
// </ul>
// </section>
