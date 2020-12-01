<template>
  <div class="user-card row">
		<div class="col col-person">
			<img :src="data.avatar" alt="Avatar">
		</div>

		<div class="col col-topics">
			<h2>
        <span>Главные темы</span>
      </h2>

			<ul>
				<li
          v-for="(theme, index) in data.themes"
          :key="index"
        >
          {{ theme }}
        </li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'user-card-component',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.user-card {
  // display: flex;
  h2 { 
    margin: 0 0 20px 0;
    font-size: 30px;
    background: #13181D;
    border-radius: 100px;
    display: inline-block;
    padding: 17px 100px 20px;
  }
  // h2 span {
  //   background: linear-gradient(left,#00c500 0,#00d7cc 60%); 
  //   background-clip: text;
  //   text-fill-color: transparent;
  //   background: -webkit-linear-gradient(left,#00c500 0,#00d7cc 60%); 
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   text-transform: uppercase;
  // }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    color: white; 
    font-size: 50px;
    list-style-type: none;
    margin: 0;
    padding: 25px 0;
  }
  ul li:before {
    content: '';
    display: inline-block;
    background-image: linear-gradient(-270deg, #00C500 0%, #00D7CC 100%);
    border-radius: 100px;
    width: 35px;
    height: 35px;
    margin: 0 75px 0 100px;
  }
  img { 
    width: 230px;
    height: 230px;
    border-radius: 50%!important;
  }
  .col-person {
    width: 350px;
  }
}
.row {
    display: flex;
  }
</style>
