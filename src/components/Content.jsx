import data from '../../data';

import './Content.css';

function Content() {
  const cards = data.map((item, index) => <Card key={index} {...item} />);
  return <main className="content">{cards}</main>;
}

export default Content;
