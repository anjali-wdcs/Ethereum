console.log('Before');
getUser(1, (user) => {
    getRepos(user.github, (repos) => {
        console.log('Repos', repos);
    });
});
console.log('After');

function getUser(id, callback){
    setTimeout(() =>{
        console.log('Reading a user from database...');
        callback({id: id, github: 'Anjali'});
    }, 3000);
}

function getRepos(username, callback){
    setTimeout(() =>{
        console.log('Calling github API...')
        callback([ 'repo1', 'repo2', 'repo3']);
    }, 3000);
}