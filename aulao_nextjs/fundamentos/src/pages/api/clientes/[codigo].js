export default function handler(req, res) {
    const codigo = req.query.codigo;

    res.status(200).json({
        id: req.query.codigo,
        nome: `Jurema (${codigo})`,
        email: `jurema${codigo}@gmail.com`
    })
}
