import { IconProps } from "@/interfaces/icons";

export default function CopyrightIcon({
  className = "icon",
  size = 24,
  color = "currentColor",
}: IconProps) {
  return (
    <i className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 201 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M91.7468 75.5804H108.413C110.624 75.5804 112.743 76.4584 114.306 78.0212C115.869 79.584 116.747 81.7036 116.747 83.9137C116.747 86.1239 117.625 88.2435 119.188 89.8063C120.75 91.3691 122.87 92.2471 125.08 92.2471C127.29 92.2471 129.41 91.3691 130.973 89.8063C132.535 88.2435 133.413 86.1239 133.413 83.9137C133.413 77.2833 130.78 70.9245 126.091 66.2361C121.403 61.5477 115.044 58.9137 108.413 58.9137H91.7468C85.1164 58.9137 78.7575 61.5477 74.0691 66.2361C69.3807 70.9245 66.7468 77.2833 66.7468 83.9137V117.247C66.7468 123.877 69.3807 130.236 74.0691 134.925C78.7575 139.613 85.1164 142.247 91.7468 142.247H108.413C115.044 142.247 121.403 139.613 126.091 134.925C130.78 130.236 133.413 123.877 133.413 117.247C133.413 115.037 132.535 112.917 130.973 111.355C129.41 109.792 127.29 108.914 125.08 108.914C122.87 108.914 120.75 109.792 119.188 111.355C117.625 112.917 116.747 115.037 116.747 117.247C116.747 119.457 115.869 121.577 114.306 123.14C112.743 124.702 110.624 125.58 108.413 125.58H91.7468C89.5367 125.58 87.417 124.702 85.8542 123.14C84.2914 121.577 83.4135 119.457 83.4135 117.247V83.9137C83.4135 81.7036 84.2914 79.584 85.8542 78.0212C87.417 76.4584 89.5367 75.5804 91.7468 75.5804ZM100.08 17.2471C83.5983 17.2471 67.4867 22.1345 53.7826 31.2913C40.0785 40.4481 29.3975 53.4629 23.0902 68.6901C16.7829 83.9173 15.1326 100.673 18.348 116.838C21.5634 133.003 29.5002 147.852 41.1546 159.506C52.8089 171.16 67.6575 179.097 83.8226 182.313C99.9877 185.528 116.743 183.878 131.97 177.57C147.198 171.263 160.212 160.582 169.369 146.878C178.526 133.174 183.413 117.062 183.413 100.58C183.413 89.6369 181.258 78.8006 177.07 68.6901C172.882 58.5796 166.744 49.3931 159.006 41.6548C151.267 33.9166 142.081 27.7783 131.97 23.5904C121.86 19.4026 111.024 17.2471 100.08 17.2471ZM100.08 167.247C86.8947 167.247 74.0054 163.337 63.0421 156.012C52.0788 148.686 43.534 138.274 38.4882 126.093C33.4423 113.911 32.1221 100.506 34.6944 87.5744C37.2668 74.6423 43.6162 62.7635 52.9397 53.44C62.2632 44.1165 74.142 37.7671 87.0741 35.1947C100.006 32.6224 113.411 33.9426 125.592 38.9884C137.774 44.0343 148.186 52.5791 155.511 63.5424C162.837 74.5057 166.747 87.395 166.747 100.58C166.747 118.261 159.723 135.218 147.221 147.721C134.718 160.223 117.761 167.247 100.08 167.247Z"
          fill={color}
        />
      </svg>
    </i>
  );
}
