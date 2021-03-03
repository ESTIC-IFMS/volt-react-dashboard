/****************
  {
    icon:
    id:
    className:
    textLabel:
    control:{
		type:
		placeholder:
    }
  }
****************/

export default  [
  {
    id: "name",
    textLabel: "Nome",
    control:{
      required: true,
      autoFocus: true,
      type: "text",
      placeholder: "Nome Nome",
    }
  },

  {
    id: "last_name",
    textLabel: "Sobrenome",
    control:{
      required: true,
      type: "text",
      placeholder: "de Nome",
    }
  },

  {
    id: "siap",
    textLabel: "SIAP",
    control:{
      required: true,
      type: "text",
      placeholder: "????",
    }
  },

  {
    id: "email",
    textLabel: "Email",
    control:{
      required: true,
      type: "email",
      placeholder: "exemplo@examplo.com",
    }
  },

  {
  	id: "idade",
  	textLabel: "Idade",
  	control:{
  		required: true,
  		type: "number",
  		placeholder: "Idade"
  	}
  },

  {
  	id: "estado",
  	textLabel: "Estado",
  	control:{
  		required: true,
  		type: "text",
  		placeholder: "ESTADO"
  	}
  },

  {
  	id: "cidade",
  	textLabel: "Cidade",
  	control:{
  		required: true,
  		type: "text",
  		placeholder: "Cidade"
  	}
  },

  {
  	id: "formacao",
  	textLabel: "Formação Academica",
  	control:{
  		required: true,
  		as: "textarea"
  	}
  },

  {
  	id: "tel",
  	textLabel: "Telefone/Celular",
  	control:{
  		required: true,
  		type: "tel",
  		placeholder: "+99 (99) 9 9999-9999"
  	}
  }

]

