import { type IconProps } from '../../types'

export const EditIcon: React.FC<IconProps> = ({ width, height, strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-edit"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth={strokeWidth}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
    <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3" />
  </svg>
)
