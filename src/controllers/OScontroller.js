import OSrepositories from "../repositories/OSrepositories.js";

class OSController {
    // GET ALL
    async index(req, res) {
        try {
            const dataResult = await OSrepositories.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar todas as OS: ${error}` });
        }
    }

    // GET BY ID
    async showById(req, res) {
        const { id } = req.params;

        try {
            const query = await OSrepositories.findById(id);
            res.status(200).json(query);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar a OS: ${error}` });
        }
    }

    // POST
    async store(req, res) {
        let { clientName, employees, osValue } = req.body;

        if (!clientName) { return res.status(400).json({ message: 'Campo obrigatório faltando: Nome do cliente' }) }
        else if (!employees) { return res.status(400).json({ message: 'Campo obrigatório faltando: Funcionários' }) }
        else if (!osValue) { return res.status(400).json({ message: 'Campo obrigatório faltando: Valor da OS' }) };

        const allDatas = [clientName, employees, osValue];

        try {
            await OSrepositories.create(allDatas);
            res.status(201).json({ message: 'OS cadastrada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao cadastrar nova OS: ${error}` });
        }
    }

    // PATCH TO UPDATE FIELDS
    async update(req, res) {
        const { id } = req.params;
        let { clientName, employees, osValue } = req.body;

        if (!clientName) { return res.status(400).json({ message: 'Campo obrigatório faltando: Nome do cliente' }) }
        else if (!employees) { return res.status(400).json({ message: 'Campo obrigatório faltando: Funcionários' }) }
        else if (!osValue) { return res.status(400).json({ message: 'Campo obrigatório faltando: Valor da OS' }) };

        const allDatas = [clientName, employees, osValue];

        try {
            await OSrepositories.updateById(id, allDatas);
            res.status(200).json({ message: 'OS atualizada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar OS: ${error}` });
        }
    }

    // DELETE A OS
    async delete(req, res) {
        const { id } = req.params;
        try {
            await OSrepositories.deleteById(id);
            res.status(200).json({ message: 'OS deletada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao deletar a OS: ${error}` });
        }
    }
}

export default new OSController();