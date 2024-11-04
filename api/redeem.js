export default function handler(req, res) {
    const { code } = req.query;

    if (code === 'UPDATE') {
        return res.status(200).json({ success: true, message: 'Código resgatado!', amount: 1000 });
    } else if (code === 'MALDIÇÃO') {
        return res.status(200).json({ success: true, message: 'Código resgatado!', amount: 500 });
    } else {
        return res.status(404).json({ success: false, message: 'Código inválido.' });
    }
}
