const Products = require('../models/Products');

////////Criar //////////
exports.create =  async(req, res) =>{
  var dados = req.body;


  await Products.create(dados)
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: 'produto inserido com sucesso!'
    });
  }).catch((err)=>{
    return res.status(400).json({
      erro:true,
      mensagem: `Erro: PRODUTO NÃO CADASTRADO... ${err}`
    })
  })
}

////////mostrar todos //////////
exports.findAll = async(req,res)=>{
  await Products.findAll({
    attributes: ['id','name','description','quantity','price'],
    order: [['id', 'ASC']]

  })
  .then((products) => {
    return res.json({
      erro: false,
      products
    });
  }).catch((err) => {
    return res.status(400).json({
      erro : true,
      mensagem: `Erro ${err} ou nenhuma categoria encontrada!!!`
    })
  })
}

////////mostrar 1 //////////
exports.findOne = async (req, res) =>{
  const {id} = req.params;
  try{
    // await User.findAll({ where: {id: id}})
    const products = await Products.findByPk(id);
    if(!products){
      return res.status(400).json({
        erro: true,
        mensagem: "Erro:Nenhuma categoria encontrada!"
      })
    }
    res.status(200).json({
      erro: false,
      products
    })
  }catch(err){
    res.status(400).json({
      erro: true,
      mensagem: `Erro ${err}`
    })
  }
}

////////alterar //////////
exports.update = async(req,res)=>{
  const {id} = req.body;

  await Products.update(req.body, {where: {id}})
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "Categoria alterada com sucesso!"
    })
  }).catch((err)=>{
    return res.status(400).json({
      erro: true,
      mensagem: `Erro: Categoria não encontrada ...${err}`
    })
  })
}

////////deletar //////////
exports.delete =  async(req,res)=>{
  const {id} = req.params;
  await Products.destroy({where: {id}})
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "Categoriea apagada com sucesso!"
    });
  }).catch((err)=>{
    return res.status(400).json({
      erro: true,
      mensagem: `Erro: ${err} Categoria não apagado...`
    })
  })
}










