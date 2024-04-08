import BasicBars from './Components/Barchart';
import './App.css';

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    canada: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    canada: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    canada: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    canada: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    canada: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    canada: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    canada: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    canada: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    canada: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    canada: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    canada: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    canada: 25,
    month: 'Dec',
  },
];

function App() {
  return (
    <>
      <BasicBars dataset={dataset} />
    </>
  );
}

export default App;
