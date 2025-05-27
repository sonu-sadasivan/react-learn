import { ReportHandler } from 'web-vitals';


const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
class Car {

  constructor() {

  }
}

const mycar = new Car();
console.log("dsdsd")
const hello = () => {
  return "Hello World!";
}
console.log(hello())

const vehicles = ["ford","vauxhall",'Maruti',"Benz"];
const [first,ukfirst,old,desired] = vehicles;
console.log("first:"+first);


