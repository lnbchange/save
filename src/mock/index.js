import Mock from 'mockjs'

Mock.mock('/list',{
    value:[
        {
            title:'111'
        },
        {
            title:'222'
        },
        {
            title:'333'
        }
    ]
})