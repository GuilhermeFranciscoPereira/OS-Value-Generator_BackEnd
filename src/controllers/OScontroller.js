import OSrepositories from "../repositories/OSrepositories.js";

class OSController {
    // GET ALL
    async index(req, res) {
        try {
            const dataResult = await OSrepositories.findAll();
            res.status(200).json(dataResult)
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar todas as OS: ${error.message}` });
        }
    }

    async showByPage(req, res) {
        const { page } = req.params;
        const offset = (page - 1) * 6;
    
        try {
            const dataResult = await OSrepositories.findPerPage(offset);
            res.status(200).json(dataResult);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar OS por página: ${error.message}` });
        }
    }
    
    // GET BY ID
    async showById(req, res) {
        const { idGet } = req.params;

        try {
            const query = await OSrepositories.findById(idGet);
            res.status(200).json(query);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar a OS: ${error.message}` });
        }
    }

    // GET BY CLIENT NAME
    async showByClientName(req, res) {
        const { clientName } = req.params;
        try {
            const query = await OSrepositories.findByPlate(clientName);
            res.status(200).json(query);
        } catch (error) {
            res.status(500).json({ message: `Erro ao buscar este nome: ${error.message}` });
        }
    }

    // POST
    async store(req, res) {
        const { employees, clientName, fullOsValue, degreeOfRisk, materialsValue, fullKM, workedTime, employeesValue } = req.body;
        const allDatas = [employees, clientName, fullOsValue, degreeOfRisk, materialsValue, fullKM, workedTime, employeesValue];

        try {
            await OSrepositories.create(allDatas);
            res.status(201).json({ message: 'OS cadastrada com sucesso!' });
        } catch (error) {
            console.log(`ERRO: ${error.message}`)
            res.status(500).json({ message: `Erro ao cadastrar nova OS: ${error.message}` });
        }
    }

    // PATCH TO UPDATE FIELDS
    async update(req, res) {
        const { idPatch } = req.params;
        const { employees, clientName, fullOsValue, degreeOfRisk, materialsValue, fullKM, workedTime, employeesValue } = req.body;
        const allDatas = [employees, clientName, fullOsValue, degreeOfRisk, materialsValue, fullKM, workedTime, employeesValue];

        try {
            await OSrepositories.updateById(idPatch, allDatas);
            res.status(200).json({ message: 'OS atualizada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao atualizar OS: ${error.message}` });
        }
    }

    // DELETE A OS
    async delete(req, res) {
        const { idDelete } = req.params;
        try {
            await OSrepositories.deleteById(idDelete);
            res.status(200).json({ message: 'OS deletada com sucesso!' });
        } catch (error) {
            res.status(500).json({ message: `Erro ao deletar a OS: ${error.message}` });
        }
    }
}

export default new OSController();