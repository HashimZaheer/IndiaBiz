Vue.component('btn',{
  template:
  `
  
  <a class="button is-dark" @click='launch'>SENDMESSAGE</a>
  
  `,
    methods:{
		launch(){
			
			
		this.$emit('button_clicked');	
			
		}

	}

});


Vue.component('modal',{
	template: 
	`
	<div class="modal" :class='active'>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
	  <slot>
	  
	  
	  
	  
	  </slot>
	  
	  
	  
	  
	  </p>
      <button class="delete" @click='closeModal' aria-label="close"></button>
    </header>
    <section class="modal-card-body">
	<slot name='section'></slot>
	
	
	
	
      <!-- Content ... -->
    </section>
   
  </div>
</div>
	

	`,
	props:[
		'active'
		
		
	],
	
	methods:{
		closeModal(){
			
			this.$emit('close_modal');
			
		}
	}
	
	
});


new Vue({
	el:'#app',
	
	data:{
		activateModal:''

		
		
	},
	
	
	methods:{
		
		close(){
			
			this.activateModal = '';
		},
		
		
		
		SENDMESSAGE(){
			this.activateModal='is-active';
			
		}
	}
});
