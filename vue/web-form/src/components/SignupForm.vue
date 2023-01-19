<template>
  <form @submit.prevent="handleSubmit">
        <label for="email">Email : </label>
        <input type="email" required v-model="email">

        <label for="password">Password : </label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label for="role" >Role : </label>
        <select v-model="role">
            <option value="Web Developer">Web Developer</option>
            <option value="Web Designer">Web Designer</option>
        </select>

        <label>Skills : </label>
        <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label for="checkbox">Accept terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an Account</button>
        </div>
        <!-- <div>
            <input type="checkbox" v-model="names" value="Mars">
            <label>Mars</label>
        </div>
        <div>
            <input type="checkbox" v-model="names" value="Mario">
            <label>Mario</label>
        </div>
        <div>
            <input type="checkbox" v-model="names" value="Angel">
            <label>Angel</label>
        </div> -->
  </form>

  <p>Email : {{ email }}</p>
  <p>Password : {{ password }}</p>
  <p>Role : {{ role }}</p>
  <p>Terms accepted : {{ terms }}</p>
  <p>Skills : {{ skills }}</p>
  <!-- <p>Names : {{ names }}</p> -->
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role:"Web Designer",
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError:''
            // names: [],
        }
    },
    methods: {
        addSkill(event) {
            if (event.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill (deletedSkill) {
            this.skills = this.skills.filter(item => {
                return deletedSkill !== item
            })
        },
        handleSubmit () {
            this.passwordError = this.password.length > 5 ? 
            '' : 'Password must be at least 6 chars long' 
        }
    },
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background:white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input , select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background:#eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #3182fb;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color:white;
    border-radius: 20px;
    font-weight: bold;
}
.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>