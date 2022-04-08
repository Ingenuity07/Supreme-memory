const initState={
    blogs:[{
        title: "blog title",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        author: "Mario",
        id: 1
      },
      {
        title: "blog 2",
        body: "body 2",
        author: "Mario",
        id: 2
      },
      {
        title: "blog 3",
        body: "ho gya BC",
        author: "Luigi",
        id: 3
      },]
}

const rootReducer = (state=initState,action) =>{
    return state;
}

export default rootReducer;

