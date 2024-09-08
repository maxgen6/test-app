import React, {FC} from "react";
import {CardItemTypeEnums} from "../../enums/CardEnums";
import {clsx} from "clsx";
import {arrow, arrowDown} from "../../assets";

export type CardItemTypes = 'primary' | 'secondary' | 'green'

interface CardItemProps {
  number: number,
  title: string,
  Icon?: React.ReactElement,
  type?: CardItemTypes
  showArrow?: boolean
  className?: string
  img: string
}
const CardItem: FC<CardItemProps> = ({
  number,
  title,
  className = '',
  img,
  type = CardItemTypeEnums.PRIMARY,
  showArrow
}) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const classNames: Record<CardItemTypes, string> = {
    [CardItemTypeEnums.PRIMARY]: 'card-item__primary',
    [CardItemTypeEnums.SECONDARY]: 'card-item__secondary',
    [CardItemTypeEnums.GREEN]: 'card-item__green'
  }

  return (
    <div className={clsx("relative rounded-[20px] h-[352px] md:p-5", classNames[type] ?? '', className)}>
      {showArrow && (
        <img
          src={isMobile ? arrowDown : arrow}
          alt="arrow"
          className={clsx("absolute right-0 top-full md:top-[25%] md:translate-x-1/2 -translate-y-1/2 z-10")}
        />
      )}
      <div className={clsx("p-5 md:p-0 flex items-center gap-4", type === CardItemTypeEnums.SECONDARY ? "mb-0" : "mb-8")}>
        <span className="relative min-w-[48px] h-[48px] rounded-full text-white font-bold text-2xl leading-6 flex items-center justify-center">{number}</span>
        <p className="text-white font-bold text-xl leading-6 whitespace-pre-line">{title}</p>
      </div>
      <img src={img} alt="img"/>
    </div>
  )
}

export default CardItem