import CardItem, {CardItemTypes} from "./CardItem";
import { image, image2, image3 } from '../../assets'
import {CardItemTypeEnums} from "../../enums/CardEnums";

type ListItemTypes = {
  id: string,
  title: string
  img: string
  type?: CardItemTypes
}

const MOCK: ListItemTypes[] = [{
  id: '1',
  title: 'Получите \n партнерскую ссылку',
  img: image,
}, {
  id: '2',
  title: 'Расскажите о IIII.COM',
  img: image2,
  type: CardItemTypeEnums.SECONDARY
}, {
  id: '3',
  title: 'Получайте хороший проце от покупок по вашей ссылке!',
  img: image3,
  type: CardItemTypeEnums.GREEN
}]

const Cards = () => {
  return (
    <ul className="flex items-center gap-2 p-1 flex-col card-wrapper rounded-3xl md:flex-row">
      {MOCK?.map(({ id, title, img, type }, index) => (
        <li key={id} className="flex-1 w-full md:w-auto">
          <CardItem
            number={index + 1}
            title={title}
            img={img}
            type={type || CardItemTypeEnums.PRIMARY}
            showArrow={index !== MOCK.length - 1}
          />
        </li>
      ))}
    </ul>
  )
}

export default Cards