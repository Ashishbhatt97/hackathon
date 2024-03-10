export default{
    name:'events',
    title:'Events',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'eventwork',
            title:'eventwork',
            type:'array',
            of:[{ type:'eventDetails'}]
        },
    ]
}