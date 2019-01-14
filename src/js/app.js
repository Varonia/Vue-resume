var app = new Vue({
    el: '#app',
    data: {
        editingName: false,
        resume: {
            name: '姓名',
            gender: '男',
            birthday:'1900/01/01',
            jobTitle:'前端工程师',
            phone:'13000000000',
            email:'xxx@xxx.com'
        }
    },
    methods: {
        onEdit(key,value){
            this.resume[key] = value
        },
        onClickSave(){
            let currentUser = AV.User.current()
            if(!currentUser){
                this.showLogin()
            }else{
                this.saveResume()
            }
            // let User = AV.Object.extend('User');
            // let user = new User();
            // user.set('resume',this.name);
            // user.set('priority',1);
            // user.save().then(function (todo) {
            //     console.log('objectId is ' + todo.id);
            // }, function (error) {
            //     console.error(error)
            // });
        },
        showLogin(){

        },
        saveResume(){

        }
    }
})