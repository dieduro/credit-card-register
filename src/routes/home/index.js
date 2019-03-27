import { h } from 'preact';
import style from './style';

import Card from "../../components/card";


const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <Card />
  </div>
);

export default Home;
