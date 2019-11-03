const itemModule = require('../modules/items')

class Items {
    constructor() {
    }

    index(itemsPerPage,offset) {
        return itemModule.find({}).sort({ _id: -1 }).limit(itemsPerPage).skip(offset);
    }

    find(name) {
        return itemModule.find({name:name}).sort({ _id: -1 });        
    }

    findById(id){
        return itemModule.findById(id)
    }

    delete(id) {
        itemModule.findByIdAndRemove(id , (err, todo) => {
            if (err) 
                return 
            const response = {
                message: "Todo successfully deleted",
                id: todo._id
            }
        })
    }

    async update(id, name, price) {
        await itemModule.findByIdAndUpdate(id ,{ name:name , price:price })
    }

    async create(body,file) {
        const item = new itemModule(Object.assign({}, body, { img: file ? file.buffer : undefined }));
        try {
            await item.save();
        } catch {
            return next(item.errors);
        }
        console.log(item);
        return item._id;
    }
}

module.exports = new Items();