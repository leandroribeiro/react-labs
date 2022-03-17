import router, { useRouter } from "next/router";
import { useEffect } from "react/cjs/react.production.min";
import Layout from "../../../components/Layout";

export default function ClientePorCodigo() {
    const router = useRouter();

    // useEffect(() => {
    //     console.log(router.query.codigo)
    // }, [])

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}