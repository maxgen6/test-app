import {Button, Cards} from "../components";
import {user} from '../assets'

const Home = () => {
  return (
    <div>
      <h3 className="ml-5 mb-9 font-bold text-2xl leading-7">Зарабатывайте вместе с нами!</h3>
      <Cards />
      <Button className="mt-14 ml-auto mr-[20%]">
        <img src={user} alt="user"/>
        Стать партнером
      </Button>
    </div>
  )
}

export default Home