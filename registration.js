import Head from 'next/head'

export default function Home() {
  return (
<div className="container">
<head>
<style >{`
.left_pos{
    margin-left: 50px;
}`}
</style>
</head>

<main>
<h1>Registration form</h1>
<form action="/registrationprocess" method="post">
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" /><br/><br/>
  <label for="Dob" >Date of birth:</label>
  <input type="date" id="dateofbirth" name='dateofbirth'/><br/><br/>
  <label for="gender">Gender:</label>
  <div className="left_pos">
  <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Male</label><br/>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Female</label><br/>
  <input type="radio" id="other" name="gender" value="other"/>
  <label for="other">Other</label><br/><br/>
  </div>
<label for="cname">College name:</label><br/>
  <input type="text" id="cname" name="cname" /><br/><br/>
<label for="course">Choose a course:</label>

<select name="Courses" id="courses">
  <option value="Artificial">Artificial intelligence</option>
  <option value="BDA">Big Data Analysis</option>
  <option value="CS">Cyber security</option>
  <option value="Ml">Machine learning</option>
</select><br/><br/>

  <button type="submit" value="Submit">Submit</button>
</form>
</main>
</div>

)
}
