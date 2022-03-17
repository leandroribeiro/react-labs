export default function handler(req, res) {
    if (req.method === "GET") {
        handleGet(res);
    }
    else {
        res.status(405).send();
    }

}
function handleGet(res) {
    res.status(200).json({
        id: 3,
        nome: 'Jurema',
        idade: 66,
        email: 'jurema@acme.com'
    });
}

