
export default function Home(){
    return(
    <>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        </div>
    </>)
}