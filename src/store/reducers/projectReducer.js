

const initState = {
  projects: [
    {id: '1', title: 'Hello world', content: 'i love this game it is the best for me'},
    {id: '2', title: 'Glo with pride', content: 'i love this game it is the best for me'},
    {id: '3', title: 'Yellow world', content: 'i love this game it is the best for me'}
  ]
}

const projectReducer = (state = initState, action) =>{

  switch(action.type){
    case 'CREATE_PROJECT':
    console.log('created project', action.project );
    return state;
    case 'CREATE_PROJECT_ERROR':
    console.log('create project error', action.err );
    return state;

    default:
    return state;
  }
  
}

export default projectReducer