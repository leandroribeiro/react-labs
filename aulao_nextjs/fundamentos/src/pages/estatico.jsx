import Layout from "../components/Layout";

export function getStaticProps() {
    // function can be async + fetch
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <div>
            <Layout titulo="Conteúdo Estático">
                <div>
                    {props.numero}
                </div>
            </Layout>
        </div>
    );
}
