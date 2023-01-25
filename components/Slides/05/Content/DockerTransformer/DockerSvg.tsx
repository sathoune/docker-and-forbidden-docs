import "./Move.module.css";

const DockerSvg = ({
  colour,
  useAnimation,
  startingPosition,
}: {
  colour: string;
  useAnimation: any;
  startingPosition: string;
}) => {
  const animation = useAnimation();
  return (
    <div className={`h-60 w-60 absolute ${startingPosition} ${animation}`}>
      <svg
        viewBox="0 0 512 512"
        fill={colour}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
      >
        <g>
          <path
            d="M252.8,246.4c1.9,0.2,1.8-1.4,1.8-2.7c0-4.5,0-8.9,0-13.4c0-4.8,0-9.5,0-14.3c0-1.1,0-2.5-1.6-2.5
		s-1.6,1.4-1.6,2.5c0,9.2,0,18.5,0,27.7C251.5,244.8,251.3,246.3,252.8,246.4L252.8,246.4z"
          />
          <path
            d="M311.2,246.5c1.8-0.1,1.7-1.7,1.7-3c0-4.5,0-9,0-13.5c0-4.6,0-9.3,0-13.9c0-1.3-0.1-2.8-1.9-2.8
		c-1.8,0-1.4,1.5-1.4,2.6c0,9.3,0,18.5,0,27.8C309.6,244.9,309.1,246.7,311.2,246.5L311.2,246.5z"
          />
          <path
            d="M277.1,246.5c1.5,0.1,1.9-1.1,1.9-2.4c0-9.5,0-19.1,0-28.6l-2-2.2l-1.2,2.4c0,4.8,0,9.5,0,14.3
		c0,4.6,0,9.3,0,13.9C275.7,244.9,275.3,246.4,277.1,246.5L277.1,246.5z"
          />
          <path
            d="M265.1,246.5c1.6,0,1.7-1.3,1.7-2.5c0-9.4,0-18.8,0-28.2c0-1.2-0.2-2.4-1.8-2.4c-1.8,0-1.5,1.4-1.5,2.5
		c0,4.6,0,9.3,0,13.9c0,4.6,0,9.3,0,13.9C263.6,244.8,263,246.5,265.1,246.5z"
          />
          <path
            d="M254.2,169.4l-1.4-2.2l-1.2,2.3c0,4.6,0,9.2,0,13.9c0,4.6,0,9.2,0,13.9c0,1.1-0.3,2.6,1.4,2.6l1.3-2.3
		C254.2,188.2,254.2,178.8,254.2,169.4z"
          />
          <path
            d="M270.9,246.5c1.8,0.1,2-1.3,2-2.7c0-9.3,0-18.5,0-27.7c0-1.4-0.1-2.8-2-2.7c-1.7,0.1-1.3,1.6-1.3,2.7
		c0,4.6,0,9.3,0,13.9s0,9.3,0,13.9C269.6,244.8,269.2,246.3,270.9,246.5L270.9,246.5z"
          />
          <path
            d="M257.4,229.8c0,4.6,0,9.3,0,13.9c0,1.1-0.4,2.6,1.2,2.8c1.8,0.2,2-1.2,2-2.6c0-9.3,0-18.5,0-27.7
		c0-1.3,0-2.9-1.9-2.8c-2.1,0.1-1.3,1.9-1.4,3C257.4,220.8,257.4,225.3,257.4,229.8L257.4,229.8z"
          />
          <path
            d="M315.6,244c0,1.1-0.3,2.5,1.5,2.5c1.5,0,1.8-1.2,1.8-2.5c0-9.4,0-18.8,0-28.2c0-1.2-0.2-2.4-1.8-2.5
		c-1.8-0.1-1.5,1.4-1.5,2.5c0,4.6,0,9.3,0,13.9C315.6,234.5,315.6,239.2,315.6,244z"
          />
          <path
            d="M206.7,200.5c1.8,0.1,1.9-1.4,1.9-2.7c0-9.4,0-18.7,0-28.1c0-1.2-0.1-2.4-1.8-2.5c-1.8,0-1.5,1.4-1.5,2.5
		c0,4.6,0,9.2,0,13.9c0,4.8,0,9.5,0,14.3C205.4,198.8,205,200.4,206.7,200.5L206.7,200.5z"
          />
          <path
            d="M229.6,198.2l1.4,2.3l2-2.2c0-9.5,0-19.1,0-28.6c0-1.2-0.1-2.4-1.8-2.5c-1.8,0-1.6,1.3-1.6,2.4
		c0,4.8,0,9.5,0,14.3C229.6,188.6,229.6,193.4,229.6,198.2L229.6,198.2z"
          />
          <path
            d="M206.7,213.3c-1.7,0.1-1.3,1.7-1.3,2.7c0,4.6,0,9.3,0,13.9s0,9.3,0,13.9c0,1.1-0.4,2.6,1.4,2.7
		c1.8,0.1,1.9-1.4,1.9-2.7c0-9.3,0-18.5,0-27.8C208.7,214.6,208.4,213.2,206.7,213.3z"
          />
          <path
            d="M212.8,200.5c1.8,0.1,1.9-1.4,1.9-2.7c0-9.4,0-18.7,0-28.1c0-1.2-0.1-2.4-1.8-2.5c-1.8,0-1.5,1.4-1.5,2.5
		c0,4.6,0,9.2,0,13.9c0,4.8,0,9.5,0,14.3C211.5,198.8,211.1,200.4,212.8,200.5L212.8,200.5z"
          />
          <path
            d="M223.6,198.2l1.3,2.3l2-2.3c0-9.5,0-19.1,0-28.6c0-1.2-0.1-2.4-1.7-2.5c-1.8-0.1-1.5,1.4-1.5,2.4
		c0,4.6,0,9.2,0,13.9C223.6,188.4,223.6,193.3,223.6,198.2z"
          />
          <path
            d="M218.9,200.5c1.5,0.1,1.8-1.1,1.9-2.4c0-9.5,0-19,0-28.6c0-1.2-0.2-2.4-1.8-2.4c-1.8,0-1.4,1.5-1.4,2.6
		c0,4.6,0,9.2,0,13.9c0,4.8,0,9.5,0,14.3C217.6,198.9,217.1,200.4,218.9,200.5L218.9,200.5z"
          />
          <path
            d="M263.6,151.7c0,1.1-0.4,2.6,1.3,2.7c1.8,0.2,2-1.2,2-2.6c0-4.6,0-9.2,0-13.8s0-9.2,0-13.9
		c0-1.3,0.2-2.9-1.7-2.9c-2.1-0.1-1.5,1.7-1.5,2.8C263.5,133.2,263.5,142.5,263.6,151.7L263.6,151.7z"
          />
          <path
            d="M284.5,169.7c0-1.1,0.3-2.6-1.5-2.5l-1.1,2.4c0,4.5,0,8.9,0,13.4c0,4.7,0,9.5,0,14.2c0,1-0.4,2.6,1.3,2.7
		c1.7,0,1.4-1.6,1.4-2.6C284.5,188.1,284.5,178.9,284.5,169.7L284.5,169.7z"
          />
          <path
            d="M299.2,246.4c1.6-0.1,1.6-1.4,1.6-2.6c0-4.6,0-9.3,0-13.9s0-9.3,0-13.9c0-1.2,0.1-2.5-1.5-2.6
		c-1.6-0.1-1.8,1.1-1.8,2.3c0,9.4,0,18.8,0,28.2C297.5,245.2,297.6,246.5,299.2,246.4L299.2,246.4z"
          />
          <path
            d="M277.2,167.2c-1.8,0-1.5,1.4-1.5,2.5c0,4.6,0,9.2,0,13.9c0,4.8,0,9.5,0,14.3c0,1.1-0.4,2.5,1.3,2.7
		c1.5,0.1,1.9-1,1.9-2.3c0-9.5,0-19.1,0-28.6C279,168.4,278.7,167.2,277.2,167.2L277.2,167.2z"
          />
          <path
            d="M259,167.2c-1.8,0-1.5,1.4-1.5,2.5c0,4.6,0,9.2,0,13.9c0,4.8,0,9.5,0,14.3c0,1.1-0.4,2.5,1.4,2.7l1.9-2.3
		c0-9.5,0-19.1,0-28.6C260.8,168.4,260.5,167.2,259,167.2L259,167.2z"
          />
          <path
            d="M281.8,137.6c0,4.6,0,9.2,0,13.8c0,1-0.4,2.6,1.4,2.5l1.2-2.3c0-9.4,0-18.8,0-28.1l-1.3-2.3
		c-1.9-0.1-1.4,1.5-1.4,2.5C281.8,128.4,281.8,133,281.8,137.6L281.8,137.6z"
          />
          <path
            d="M265.1,167.2c-2.1-0.1-1.5,1.7-1.5,2.8c-0.1,4.5,0,8.9,0,13.4c0,4.8,0,9.5,0,14.3c0,1.1-0.4,2.6,1.3,2.7
		c1.8,0.2,2-1.3,2-2.6c0-9.2,0-18.5,0-27.7C266.8,168.9,267,167.3,265.1,167.2L265.1,167.2z"
          />
          <path
            d="M271.2,167.2c-2.1-0.1-1.5,1.7-1.6,2.8c-0.1,4.5,0,8.9,0,13.4c0,4.8,0,9.5,0,14.3c0,1.1-0.4,2.6,1.3,2.7
		c1.8,0.2,2-1.3,2-2.6c0-9.2,0-18.5,0-27.7C272.9,168.9,273,167.3,271.2,167.2L271.2,167.2z"
          />
          <path
            d="M281.8,243.7l1.2,2.3c1.8,0,1.4-1.5,1.4-2.5c0-4.5,0-8.9,0-13.4c0-4.6,0-9.2,0-13.8c0-1.1,0.3-2.6-1.5-2.5
		l-1.2,2.3C281.8,225.3,281.8,234.5,281.8,243.7L281.8,243.7z"
          />
          <path
            d="M252.9,154c1.7,0,1.3-1.6,1.3-2.7c0.1-4.5,0-8.9,0-13.4c0-4.7,0-9.5,0-14.3l-1.2-2.4c-1.8-0.1-1.5,1.4-1.5,2.4
		c0,9.2,0,18.4,0,27.6C251.5,152.4,251.2,154,252.9,154L252.9,154z"
          />
          <path
            d="M257.5,151.7c0,1.2-0.5,2.9,1.6,2.8c1.8-0.2,1.6-1.8,1.6-3c0-4.5,0-8.9,0-13.4c0-4.6,0-9.2,0-13.9
		c0-1.2,0.2-2.9-1.7-3c-2.2-0.1-1.6,1.7-1.6,2.8C257.4,133.2,257.4,142.4,257.5,151.7L257.5,151.7z"
          />
          <path
            d="M303.5,243.3c0,1.2-0.7,3.3,1.7,3.1c2.1-0.1,1.6-2,1.7-3.4c0-4.3,0-8.6,0-13c0-4.5,0-8.9,0-13.4
		c0-1.4,0.4-3.2-1.7-3.3c-2.4-0.1-1.7,1.9-1.7,3.1C303.5,225.4,303.5,234.4,303.5,243.3L303.5,243.3z"
          />
          <path
            d="M269.6,137.7c0,4.8,0,9.5,0,14.3c0,1.1-0.3,2.5,1.5,2.5c1.6,0,1.8-1.2,1.8-2.5c0-9.4,0-18.8,0-28.1
		c0-1.3-0.1-2.8-1.9-2.7c-1.8,0.1-1.3,1.6-1.3,2.7C269.6,128.4,269.6,133.1,269.6,137.7L269.6,137.7z"
          />
          <path
            d="M275.7,137.8c0,4.6,0,9.2,0,13.9c0,1.2-0.5,2.9,1.6,2.8c1.6-0.1,1.6-1.4,1.6-2.6c0-9.4,0-18.8,0-28.1
		c0-1.2,0-2.5-1.6-2.6c-2.2-0.1-1.6,1.7-1.6,2.8C275.6,128.6,275.7,133.2,275.7,137.8L275.7,137.8z"
          />
          <path
            d="M212.8,213.3c-1.7,0.1-1.3,1.6-1.3,2.7c0,4.6,0,9.3,0,13.9s0,9.3,0,13.9c0,1.1-0.4,2.6,1.3,2.7
		c1.8,0.1,2-1.3,2-2.7c0-9.3,0-18.5,0-27.8C214.8,214.6,214.6,213.2,212.8,213.3z"
          />
          <path
            d="M235.7,197.3c0,1-0.4,2.7,1.3,2.7c2.1,0.1,1.5-1.8,1.5-2.9c0.1-4.5,0-9,0-13.4c0-4.5,0.1-9,0-13.4
		c0-1.1,0.6-3-1.5-2.9c-1.7,0-1.3,1.6-1.3,2.7C235.6,179.1,235.6,188.2,235.7,197.3z"
          />
          <path
            d="M160.7,246.5c1.8,0.1,1.9-1.3,1.9-2.7c0-9.3,0-18.5,0-27.7c0-1.4-0.1-2.8-1.9-2.7c-1.7,0.1-1.3,1.6-1.3,2.7
		c0,4.6,0,9.3,0,13.9s0,9.3,0,13.9C159.4,244.8,159,246.3,160.7,246.5L160.7,246.5z"
          />
          <path
            d="M143.7,243.8l1.4,2.2l1.2-2.3c0-4.6,0-9.2,0-13.8c0-4.5,0-8.9,0-13.4c0-1,0.4-2.6-1.4-2.6l-1.3,2.3
		C143.7,225.4,143.7,234.6,143.7,243.8L143.7,243.8z"
          />
          <path
            d="M167,246.5c1.9-0.1,1.7-1.6,1.7-2.9c0-9.2,0-18.4,0-27.6c0-1.4-0.2-2.8-2-2.6c-1.7,0.1-1.3,1.6-1.4,2.7
		c0,4.6,0,9.2,0,13.8s0,9.2,0,13.8C165.3,244.9,164.9,246.6,167,246.5L167,246.5z"
          />
          <path
            d="M171.4,243.5c0,1.1-0.3,2.6,1.5,2.5l1.3-2.3c0-9.2,0-18.4,0-27.7l-1.3-2.3c-1.8-0.1-1.5,1.4-1.5,2.5
		c0,4.5,0,8.9,0,13.4C171.4,234.3,171.4,238.9,171.4,243.5L171.4,243.5z"
          />
          <path
            d="M137.6,243.8l1.5,2.1l1.3-2.3c0-4.5,0-8.9,0-13.4c0-4.6,0-9.2,0-13.8c0-1.1,0.3-2.6-1.5-2.5l-1.3,2.3
		C137.6,225.4,137.6,234.6,137.6,243.8L137.6,243.8z"
          />
          <path
            d="M183.6,243.5c0,1.1-0.3,2.6,1.5,2.5c1.7-0.1,1.3-1.7,1.3-2.7c0-4.5,0-8.9,0-13.4c0-4.5,0-8.9,0-13.4
		c0-1.1,0.4-2.6-1.3-2.7c-1.8-0.1-1.5,1.4-1.5,2.5C183.6,225.4,183.6,234.5,183.6,243.5z"
          />
          <path
            d="M177.5,229.8c0,4.6,0,9.2,0,13.8l1.2,2.3c1.8,0.1,1.6-1.4,1.6-2.4c0-9.1,0-18.2,0-27.2c0-1.1,0.3-2.6-1.4-2.6
		c-1.7,0-1.3,1.6-1.3,2.7C177.5,220.9,177.5,225.4,177.5,229.8L177.5,229.8z"
          />
          <path
            d="M438.2,264.9c2.4-7.5,6.5-9.3,14.3-9.5c26.1-0.6,47.1-10.5,58.8-35.4c1.1-2.3,1-3.2-1.3-4.6
		c-16.7-10.3-34.6-12.2-53.4-8.1c-1.6,0.4-3.5,1.8-4.1-1.6c-2.8-15.6-11.2-28-22.5-38.6c-3.8-3.5-7.4-7.2-12.1-9.6
		c-4.2,4-8.1,8.4-10.3,13.8c-8.9,21.5-8.9,42.7,3.3,63.2c1.4,2.4,0.8,3.1-1.2,4.1c-5.3,2.6-10.8,4.7-16.5,6.5
		c-15.5,4.9-31.4,4.1-47.3,4.2c-3.2,0-4.2-0.8-4.1-4.1c0.2-12.9-0.1-25.8,0.2-38.6c0.1-4-1.2-4.7-4.9-4.7
		c-11.7,0.2-23.4,0.1-35.2,0.1c-7,0-6.1,0.8-6.1-5.9c0-27.5,0-55,0-82.5c0-2.8-0.5-4-3.7-4c-16.1,0.2-32.1,0.2-48.2,0
		c-3.2,0-3.8,1-3.8,4c0.2,12.6-0.1,25.2,0.2,37.8c0.1,3.9-1,4.7-4.8,4.7c-27.8-0.2-55.5,0-83.3-0.2c-3.5,0-4.3,1-4.2,4.3
		c0.2,12.7,0,25.5,0.1,38.2c0,2.8-0.7,3.6-3.6,3.6c-12.7-0.1-25.5,0-38.2-0.1c-3.3,0-4.4,0.6-4.4,4.2c0.2,13.2,0,26.3,0.2,39.5
		c0,2.8-0.7,3.7-3.6,3.6c-10.9-0.2-21.7,0-32.5-0.1c-2.1,0-3.5,0.2-3.7,2.9c-0.7,9.5-1.4,19-0.5,28.6c0.5,5,0.5,5-4.6,4
		c-10.1-2-19.2-5.9-26.7-13.6c-0.6,7.4-2.6,10.4-9.2,13.7c-6.7,3.4-14.1,4.7-21.2,7.2c19.7,0,39.3,0.1,59-0.1c3.3,0,4.3,1.1,4.9,4.2
		c3.8,20.6,12.3,39,25.8,55.1c26.5,31.7,61.5,46.5,101.8,50.1c31.2,2.8,62.1-0.2,92.5-7.7c59.1-14.7,106-46.6,138.6-98.7
		c1.4-2.3,3-2.9,5.6-2.9c25.8,0.1,51.5,0.1,77.3,0.1h4.4c-4.9-1.8-9.8-2.8-14.5-4.5c-7.8-2.8-16.1-5.4-15.9-16.3
		c-2.6,2.1-4.7,4.1-7.1,5.7c-12.7,8.3-26.9,9.6-41.6,8.9c-2.6-0.1-1.9-1.2-1.2-2.7C432.4,277.1,436.1,271.3,438.2,264.9L438.2,264.9
		z M294,212.5c0-2.4,1-2.9,3.1-2.9c11.4,0.1,22.9,0.1,34.3,0c2.2,0,3.1,0.8,3.1,3c0,11.6,0,23.1,0,34.7c0,2.3-1.2,2.9-3.3,2.9
		c-5.6-0.1-11.3,0-16.9,0s-11.3-0.1-16.9,0c-2.2,0-3.5-0.4-3.4-3C294.1,235.6,294.1,224,294,212.5L294,212.5z M288.5,200.8
		c0,2.4-1,3.3-3.3,3.3c-11.4-0.1-22.9-0.1-34.3,0c-2.7,0-3.1-1.2-3-3.5c0.1-5.6,0-11.3,0-16.9c0-5.6,0.1-11.3,0-16.9
		c0-2.4,0.6-3.3,3.2-3.3c11.3,0.1,22.6,0.1,33.8,0c2.5,0,3.7,0.7,3.6,3.4C288.5,178.2,288.5,189.5,288.5,200.8z M247.9,137.6
		c0-5.5,0.1-11,0-16.5c-0.1-2.5,0.5-3.6,3.3-3.6c11.3,0.1,22.5,0.1,33.8,0c2.7,0,3.5,1,3.5,3.5c-0.1,11.1-0.1,22.3,0,33.4
		c0,2.6-0.8,3.6-3.5,3.6c-11.3-0.1-22.5-0.1-33.8,0c-2.8,0-3.4-1-3.3-3.6C248,148.9,247.9,143.2,247.9,137.6L247.9,137.6z
		 M247.9,213.1c0-2.5,0.5-3.6,3.3-3.5c11.3,0.1,22.5,0.1,33.8,0c2.7,0,3.5,1,3.5,3.5c-0.1,11.1-0.1,22.3,0,33.4
		c0,2.8-0.8,3.8-3.7,3.7c-5.6-0.2-11.3,0-16.9,0c-5.5,0-11-0.1-16.5,0c-2.5,0.1-3.6-0.5-3.5-3.3C248,235.7,247.9,224.4,247.9,213.1
		L247.9,213.1z M205.2,163.6c11.1,0.1,22.2,0.1,33.3,0c2.7,0,3.5,0.8,3.5,3.5c-0.2,5.6-0.1,11.3-0.1,16.9c0,5.6-0.1,11.3,0.1,16.9
		c0,2.4-0.7,3.3-3.2,3.3c-11.3-0.1-22.5-0.1-33.8,0c-2.5,0-3.2-0.8-3.2-3.2c0.1-11.3,0.1-22.5,0-33.8
		C201.8,164.5,202.5,163.5,205.2,163.6L205.2,163.6z M242,230.3c0,5.6-0.1,11.3,0,16.9c0.1,2.2-0.8,3-3,3c-11.4-0.1-22.8-0.1-34.3,0
		c-2,0-2.8-0.6-2.8-2.7c0.1-11.7,0.1-23.4,0-35.1c0-2,0.7-2.8,2.8-2.8c11.4,0.1,22.8,0.1,34.3,0c2.7,0,3.1,1.2,3.1,3.4
		C241.9,218.7,242,224.5,242,230.3L242,230.3z M158.8,163.6c11.4,0.1,22.8,0.1,34.2,0c2.3,0,3,0.9,2.9,3.1
		c-0.1,11.5-0.1,23.1,0,34.6c0,2-0.7,2.9-2.8,2.8c-11.5,0-23.1-0.1-34.6,0c-2.6,0-2.7-1.4-2.7-3.3c0-5.6,0-11.3,0-16.9
		c0-5.8,0.1-11.5,0-17.3C155.8,164.4,156.5,163.5,158.8,163.6z M159.4,209.6c5.6,0.2,11.3,0,16.9,0c5.5,0,11,0.1,16.5,0
		c2.5-0.1,3.2,0.9,3.2,3.3c-0.1,11.4-0.1,22.9,0,34.3c0,2.6-1,3.1-3.3,3.1c-11.1-0.1-22.3-0.1-33.4,0c-2.7,0-3.4-0.9-3.4-3.5
		c0.1-11.3,0.1-22.6,0-33.8C155.8,210.1,156.8,209.5,159.4,209.6L159.4,209.6z M109.8,212.7c0-2.6,1-3.1,3.4-3.1
		c11.1,0.1,22.3,0.1,33.4,0c2.7,0,3.4,1,3.4,3.5c-0.1,11.3-0.1,22.5,0,33.8c0,2.8-1,3.4-3.5,3.4c-5.5-0.1-11,0-16.5,0
		c-5.5,0-11-0.1-16.5,0c-2.4,0-3.7-0.4-3.6-3.3C109.9,235.5,109.9,224.1,109.8,212.7L109.8,212.7z M413.3,295.3
		c-10.1,15-21.5,29-35,41c-16.5,14.7-34.8,26.5-55,35.6c-21.3,9.6-43.6,15.6-66.7,19.1c-11.3,1.7-22.6,2.4-33.9,3.1
		c-28.3,1.1-55.9-1.6-82.1-13.4c-15.5-7-28.8-17-40.9-28.7l-1.4-2.5c14.1,0.9,28.1,0.7,42.1-0.1c10.8-0.9,21.5-2.5,32.1-5.3l4.1-1.4
		c2.2-0.7,3.6-2.1,2.8-4.5c-0.7-2.5-2.7-2.7-4.9-2c-8.8,2.9-17.8,4.5-27,5.4c-7.3,0.7-14.6,1.7-21.9,1.4
		c-10.4,0.4-20.7,0.1-31.1-0.6c-1.6-0.1-2.6-0.7-3.5-2c-9.9-13.9-16.5-29.2-19.6-46.1c-0.4-2.3,0.5-2.4,2.2-2.4
		c5.8,0.1,11.5,0.1,17.3,0.1l3.9-0.1c91.4,0,182.8,0,274.3,0l3.9,0.1c12.9,0,25.7,0,38.6-0.2C414.7,291.9,414.9,292.8,413.3,295.3
		L413.3,295.3z M421.7,281.4c-1.3,2.3-2.5,2.9-5.1,2.2c-5.7-1.6-11.4-3.2-16.3-6.7c-1.7-1.2-2.5-0.9-3.9,0.4c-3.2,3-6.9,5.2-11.3,6
		c-9.6,3.7-19.8,4.2-29.8,4.2c-12,0-24-1.1-35.6-4.2c-7.4-1.9-15-3.5-20.2-10l-2.3,0.4c-13.8,12.3-30.6,14.1-47.9,13.4
		c-9.7-0.4-19.2-2.6-27.9-7.1c-3.6-1.9-6.5-6.1-9.8-6.7c-2.9-0.5-5.8,4.5-9.6,6.1c-9.7,4-19.9,5.9-30.3,7.1
		c-13.8,1.6-27.7,1.5-41.4-1.5c-6.4-1.4-12.7-3.3-17.4-8.1c-1.5-1.5-2.3-0.7-3.6,0.1c-6.2,3.9-12.9,6.4-20.2,7.2
		c-5.4,1.8-11.1,1.7-16.7,1.8c-1.5,0-2.3-0.5-2.5-2.2c-1.2-8.1-0.7-16.1-0.5-24.2c0-2.1,1.4-2.5,3.2-2.5c4.9,0.1,9.8,0.1,14.7,0.1
		c1.9,0,3.8-0.1,5.6-0.1c89.5,0,179.1,0,268.6,0c15.4,0,30.5-2.4,44.8-8.5c5.5-2.3,10.7-5.1,15.4-8.7c0.9-0.7,2.8-1.3,0.8-3.2
		c-7.7-7.3-11.4-16.6-12.7-26.9c-1.7-13.1-0.5-26,6.1-37.8c2.6-4.6,2.7-4.7,6.6-1.2c12,10.6,20.9,23.1,22.8,39.6
		c0.2,2.3,0.2,4.6,0.1,6.9l1.2,1.8c17.3-7.8,34.7-8.4,52.3-0.9c3.5,1.5,3.2,3,1.5,5.7c-8.6,13.4-21.4,20.2-36.7,22.9
		c-7.2,1.3-14.5,2.3-21.9,1c-3.3-0.6-5.1,0.4-6.4,3.9C431.8,261.9,426.9,271.8,421.7,281.4L421.7,281.4z"
          />
          <path
            d="M113.4,243.5c0,1-0.4,2.6,1.5,2.4l1.2-2.4c0-9.1,0-18.2,0-27.2c0-1.1,0.3-2.6-1.5-2.4l-1.1,2.4
		c0,4.5,0,8.9,0,13.4C113.4,234.3,113.4,238.9,113.4,243.5z"
          />
          <path
            d="M131.5,243.6l1.2,2.4c1.8,0.1,1.5-1.4,1.5-2.4c0-9.1,0-18.2,0-27.3l-1.2-2.4c-1.8-0.1-1.5,1.4-1.6,2.4
		c0,4.5,0,9,0,13.4C131.5,234.3,131.5,238.9,131.5,243.6L131.5,243.6z"
          />
          <path d="M120.7,246l1.4-2.2c0-4.6,0-9.2,0-13.9c0-4.6,0-9.2,0-13.8l-1.3-2.3l-1.4,2.2c0,9.2,0,18.5,0,27.7L120.7,246z" />
          <path
            d="M219.1,213.3c-2.1-0.1-1.6,1.7-1.6,2.8c0,9.1,0,18.2,0,27.3c0,1.1-0.6,2.9,1.5,2.9c1.8,0,1.8-1.5,1.8-2.8
		c0-4.5,0-9,0-13.4c0-4.6,0-9.3,0-13.9C220.8,215,220.9,213.4,219.1,213.3L219.1,213.3z"
          />
          <path
            d="M126.8,246l1.4-2.2c0-4.5,0-9,0-13.4c0-4.8,0-9.5,0-14.3l-1.4-2.2l-1.4,2.2c0,9.2,0,18.5,0,27.7L126.8,246
		L126.8,246z"
          />
          <path
            d="M237.2,213.8c-1.8,0-1.4,1.5-1.4,2.6c-0.1,4.5,0,8.9,0,13.4c0,4.6,0,9.2,0,13.8l1.3,2.3l1.4-2.2
		c0-9.2,0-18.5,0-27.7L237.2,213.8L237.2,213.8z"
          />
          <path
            d="M323.3,246.5c1.5,0,1.7-1.3,1.7-2.5c0-9.4,0-18.8,0-28.2c0-1.2-0.3-2.4-1.8-2.4c-1.8,0-1.5,1.5-1.5,2.6
		c0,4.6,0,9.3,0,13.9c0,4.6,0,9.3,0,13.9C321.7,244.8,321.2,246.6,323.3,246.5z"
          />
          <path
            d="M191.1,200l1.3-2.3c0-4.7,0-9.5,0-14.2c0-4.7,0-9.5,0-14.2l-1.1-2l-1.6,2c0,9.5,0,19,0,28.5L191.1,200
		L191.1,200z"
          />
          <path
            d="M233,216.5c0-1.4,0.2-3.2-1.9-3.2c-2,0-1.5,1.8-1.5,3c0,9.1,0,18.1,0,27.2c0,1.2-0.5,2.9,1.5,2.9
		c2.1,0,1.9-1.8,1.9-3.2c0-4.5,0-8.9,0-13.4C233,225.4,233,221,233,216.5L233,216.5z"
          />
          <path
            d="M189.7,229.7c0,4.6,0,9.2,0,13.8c0,1.1-0.4,2.6,1.4,2.5l1.2-2.3c0-9.2,0-18.4,0-27.6l-1.2-2.3
		c-1.8-0.1-1.5,1.4-1.5,2.5C189.6,220.8,189.6,225.2,189.7,229.7L189.7,229.7z"
          />
          <path
            d="M183.6,197.8l1.4,2.2l1.3-2.3c0-4.6,0-9.2,0-13.8c0-4.8,0-9.5,0-14.3l-1.2-2.4c-1.8-0.1-1.5,1.3-1.6,2.4
		C183.6,179.1,183.6,188.4,183.6,197.8L183.6,197.8z"
          />
          <path
            d="M225,213.3c-2,0.1-1.4,1.9-1.4,3c-0.1,4.5,0,9,0,13.5c0,4.6,0,9.3,0,13.9c0,1.2-0.5,2.9,1.7,2.8
		c1.5-0.1,1.6-1.4,1.6-2.6c0-9.3,0-18.5,0-27.8C226.9,214.8,226.8,213.2,225,213.3z"
          />
          <path
            d="M329.1,246.5c1.8,0.1,2-1.3,2-2.7c0-4.6,0-9.3,0-13.9c0-4.6,0-9.3,0-13.9c0-1.4-0.1-2.8-2-2.7
		c-1.7,0.1-1.3,1.6-1.3,2.7c0,9.3,0,18.5,0,27.8C327.8,244.8,327.4,246.3,329.1,246.5z"
          />
          <path
            d="M160.7,200.5l1.9-2.3c0-9.5,0-19.1,0-28.6c0-1.2-0.2-2.4-1.8-2.4c-1.8,0-1.5,1.4-1.5,2.5c0,4.6,0,9.2,0,13.9
		c0,4.8,0,9.5,0,14.3C159.4,198.9,159,200.4,160.7,200.5L160.7,200.5z"
          />
          <path
            d="M166.7,200.5c1.8,0.1,2-1.3,2-2.7c0-9.4,0-18.8,0-28.2c0-1.2-0.2-2.4-1.8-2.5c-1.8,0-1.6,1.3-1.6,2.5
		c0,4.6,0,9.3,0,13.9c0,4.8,0,9.5,0,14.3C165.4,198.9,165.1,200.4,166.7,200.5z"
          />
          <path
            d="M177.5,197.8l1.4,2.2l1.3-2.3c0-4.8,0-9.5,0-14.3c0-4.6,0-9.2,0-13.8l-1.2-2.4c-1.8-0.1-1.5,1.3-1.5,2.4
		C177.5,179.1,177.5,188.4,177.5,197.8z"
          />
          <path
            d="M172.8,200c1.8,0.1,1.4-1.5,1.4-2.6c0-4.6,0-9.2,0-13.8c0-4.6,0-9.2,0-13.8c0-1.1,0.3-2.6-1.5-2.5l-1.2,2.3
		c0,9.2,0,18.4,0,27.7C171.5,198.3,171.1,199.9,172.8,200L172.8,200z"
          />
          <path
            d="M204.5,325.5c-0.1-6.3-5.2-11.1-11.5-10.9c-6.1,0.2-10.8,5.1-10.7,11.3c0,6,5.1,11,11.1,11
		C199.8,336.8,204.6,331.8,204.5,325.5z M193.6,333.7c-4.4,0.1-8-3.3-8.2-7.7c-0.2-4.3,3-7.9,7.2-8.2c1.5-0.1,3.6-0.8,2.5,2.5
		c-0.9,2.6,1,4.6,3.5,3.6c3-1.2,2.6,0.4,2.7,2.1C201.3,330.2,197.9,333.6,193.6,333.7z"
          />
        </g>
      </svg>
    </div>
  );
};

export default DockerSvg;
