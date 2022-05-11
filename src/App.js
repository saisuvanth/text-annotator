import './App.css';
import { useState, useEffect } from 'react';
import Annotations from './components/Annotations';
import MainContent from './components/MainContent';
import Records from './components/Records';

function App() {
  const [record, setRecord] = useState(0);
  const [annotations, setAnnotations] = useState([]);
  const [mainArray, setMainArray] = useState([]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('records') === null)
      localStorage.setItem('records', JSON.stringify(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 'Lorem ipsum dolor sit amet, consectetur adipfffscing elit, sed do eiusmod', 'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod', 'Lorem ipsum dolor sit at, consectetur apiscing elit, sed do eiusmod', 'Lorem ipsum dolor t amet, consectetur adipiscing elit, sed do eiusmod', 'Lorem ipsum dolerur sit amet, consectetur adipiscing elit, sed do eiusmod']));
    if (localStorage.getItem('main-content') === null) {
      localStorage.setItem('main-content', JSON.stringify([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cumque ab labore itaque autem beatae nulla ipsum culpa deserunt enim, veniam hic non explicabo quidem exercitationem libero voluptate mollitia obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, harum nemo repellat saepe, quae minima molestiae nesciunt, laborum velit sit autem facere animi. Asperiores, pariatur adipisci quae delectus consequatur quibusdam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam recusandae voluptate vero exercitationem nostrum blanditiis veniam? Minus officiis magni, aliquam minima cupiditate perferendis asperiores laboriosam recusandae rerum ut. Fugit, dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi odio vero nobis consequuntur voluptas. Saepe nesciunt eaque provident, at et, excepturi debitis doloremque aliquam nam aspernatur ad? Dignissimos, aperiam sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus molestiae ratione voluptas ut ad vel veniam modi possimus totam sed, nesciunt, saepe, voluptatem voluptatum iure corporis ducimus officiis. Ipsam!',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet impedit porro accusantium  adipisci facilis molestias velit ut veritatis, unde animi quas alias nihil fugiat quos esse dignissimos at asperiores culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatem consequuntur sint quia voluptas perferendis soluta quae! Aliquam molestias mollitia sit molestiae cum doloremque quae odio, eos officia eveniet delectus.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit porro accusantium  adipisci facilis molestias velit ut veritatis, unde animi lias nihil fugiat quos esse dignissimos at asperiores culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatem consequuntur sint quia voluptas perferendis soluta quae! Aliquam molestias mollitia sit molestiae cum doloremque quae odio, eos offi blanditiis veniam? Minus officiis magni, aliquam minima cupiditate perferendis asperiores laboriosam recusandae rerum ut. Fugit, dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi odio vero nobis consequuntur voluptas. Saepe nesciunt eaque provident, at et, excepturi debitis doloremque aliquam nam aspernatur ad? Dignissimos, aperiam sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus molcia eveniet delectus.',
        'Lorem ipsum, dolor sit amet consectetur  Amet impedit porro accusantium  adipisci facilis molestias velit ut veritatis, unde animi quas alias nihil fugiat quos esse dignissimos at asperiores culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatem consequuntur sint quia voluptas perferendis soluta quae! Aliquam molestias mollitia sit  blanditiis veniam? Minus officiis magni, aliquam minima cupiditate perferendis asperiores laboriosam recusandae rerum ut. Fugit, dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi odio vero nobis consequuntur voluptas. Saepe nesciunt eaque provident, at et, excepturi debitis doloremque aliquam nam aspernatur ad? Dignissimos, aperiam sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus mol molestiae cum doloremque quae odio, eos officia eveniet delectus.',
        'Lorem ipsum, dolor sit  Amet impedit porro accusantium  adipisci facilis molestias velit ut veritatis, unde animi quas alias nihisdjc adfn ojda fedjisdw hes esse dignissimos at asperiores culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, voluptatem consequuntur sint quia voluptas perferendis soluta quae! Aliquam molestias mollitia sit molestiae cum doloremque quae odio, eos officia eveniet delectus.',
        'Lorem ipsum dolor sadipisicing elit. Quae cumque ab labore itaque autem beatae nulla ipsum culpa deserunt enim, veniam hic non explicabo quidem exercitationem libero voluptate mollitia obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, harum nemo repellat saepe, quae minima molestiae nesciunt, laborum velit sit autem facere animi. Asperiores, pariatur adipisci quae delectus consequatur quibusdam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam recusandae voluptate vero exercitationem nostrum blanditiis veniam? Minus officiis magni, aliquam minima cupiditate perferendis asperiores laboriosam recusandae rerum ut. Fugit, dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi odio vero nobis consequuntur voluptas. Saepe nesciunt eaque provident, at et, excepturi debitis doloremque aliquam nam aspernatur ad? Dignissimos, aperiam sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus molestiae ratione voluptas ut ad vel veniam modi possimus totam sed, nesciunt, saepe, voluptatem voluptatum iure corporis ducimus officiis. Ipsam!'
      ]))
    }
    if (localStorage.getItem('annotations') === null)
      localStorage.setItem('annotations', JSON.stringify([{ text: 'Lorem', type: 'person' }, { text: 'porro', type: 'org' }, { text: 'velit', type: 'org' }, { text: 'culpa', type: 'org' }, { text: 'libero', type: 'person' }, { text: 'fugiat', type: 'person' }, { text: 'dolor', type: 'org' }, { text: 'amet', type: 'person' }, { text: 'elit', type: 'org' }]));
    setArray(JSON.parse(localStorage.getItem('records')));
    setMainArray(JSON.parse(localStorage.getItem('main-content')));
    setAnnotations(localStorage.getItem('annotations') ? JSON.parse(localStorage.getItem('annotations')) : []);
  }, [])

  return (
    <>
      <h1 className='heading'>Annotator</h1>
      <div className="App">
        <Records array={array} handleClick={setRecord} />
        <MainContent record={mainArray[record]?.split(' ')} annotList={annotations} setAnnotList={setAnnotations} />
        <Annotations annots={annotations} setAnnots={setAnnotations} />
      </div>
    </>
  );
}

export default App;
