export default function Jsx() {
    const titulo = <h1>JSX é um conceito central</h1>;
    const a = 5;
    const b = 2;

    console.log(a * b);

    function subtitulo(){
        return <h2>{"blá ble bli".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            <h2>{a * b}</h2>
            {subtitulo()}
        </div >
    )
}