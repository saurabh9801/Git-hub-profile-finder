
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}
export default function DateThree(){
    const date = new Date()
    console.log(date)
    return(
        <>
        <h1>fdf</h1>
        <h1>To Do List for {formatDate(today)}</h1>
        </>
    )
}