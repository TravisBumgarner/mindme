const elasticsearch = require('elasticsearch')

class ElasticHelper {
    constructor(index, type){
        this.type = type
        this.index = index
        this.elasticClient = this.connect()
    }

    // REFACTOR - Code smell - Where could I put this?
    async connect() {
        this.elasticClient = await new elasticsearch.Client({
            host: 'localhost:9200',
            log: 'trace'
        })
    }
    
    createIndex() {
        return this.elasticClient.indices.create({
            index: this.index,
        })
    }

    putMapping(params) {
        return this.elasticClient.indices.putMapping({
            index: this.index,
            type: this.type,
            ...params
        })
    }
    
    deleteIndex() {
        return this.elasticClient.indices.delete({
            index: this.index,
        })
    }
    
    openIndex() {
        return this.elasticClient.indices.open({
            index: this.index,
        })
    }
    
    closeIndex() {
        return this.elasticClient.indices.close({
            index: this.index,
        })
    }

    singleAdd(document) {
        return this.elasticClient.index({
            index: this.index,
            type: this.type,
            body: {
                ...document
            }
        })
    }

    bulkAdd(documents) {
        const body = []
        const header = {
            'index' : {
                '_index': this.index,
                '_type': this.type,
            } 
        }
        documents.map(doc => body.push(header, doc))

            return this.elasticClient.bulk({body})     
    }

}

module.exports = ElasticHelper