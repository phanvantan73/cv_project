<template>
    <div id="career">
    	<div class="row">
    		<div class="col-md-12">
    			<div class="jumbotron m-bot-0">
    				<div class="row">
    					<div class="col-md-6">
    						<img src="assets/hk.jpg" alt="" width="100%" height="100%">
    					</div>
    					<div class="col-md-6">
    						<div class="card border-orange">
							  	<div class="card-body text-left">
							  		<blockquote class="quote-box">
							      		<p class="quotation-mark">
								        	“
							      		</p>
								      	<p class="quote-text">
								        	Education is not Preparation
								        	<br>
								        	For Life, Education is Life Itself. 
								      	</p>
								      	<hr>
								      	<div class="blog-post-actions">
								        	<p class="blog-post-bottom pull-left">
								          		Beckham Roy
								        	</p>
								      	</div>
								    </blockquote>
						  		</div>
							</div>
    					</div>
    				</div>
    				<hr>
    				<div class="row">
    					<div class="col-md-6" v-for="(item, key) in experience" :key="key">
    						<div class="card border-orange mb-3 max-width-18-r">
							  	<div class="card-header bg-transparent border-orange">
							  		{{ item.work }}
							  	</div>
						  		<div class="card-body">
									<img :src="item.image" alt=""
										width="80%"
										height="80%"
										class="min-height-200" 
									>
									<hr>
						    		<h5 class="card-title">Experience</h5>
						    		<ul class="list-group list-group-flush">
									    <li class="list-group-item" v-for="(exp, k) in item.experience" :key="k">
									    	{{ exp }}
									    </li>
								  	</ul>
						  		</div>
							  	<div class="card-footer bg-transparent border-orange">
								  	From {{ item.start_time }} to {{ item.end_time }}
								  </div>
							</div>
    					</div>
    				</div>
			     </div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
	    name: "WORK_EXPERIENCE",
	    computed: {
	    	...mapGetters({
	    		experience: 'experience'
	    	}),
	    }
	};
</script>

<style scoped>
#career {
    color: #fd7e14;
}

.quotation-mark {
	margin-top: -10px;
    font-weight: bold;
    font-size: 100px;
    color: #fd7e14;
    font-family: "Times New Roman", Georgia, Serif;
}

.quote-text {
	font-size: 19px;
    margin-top: -65px;
}

.max-width-18-r {
	max-width: 18rem;
}

.border-orange {
	border-color: #fd7e14;
}

.min-height-200 {
	min-height: 200px;
}
</style>
