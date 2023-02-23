<template>
    <div>
        <br>
        <h2> {{ name }}</h2>
        <br>
        <p>{{ msg }}</p>
        <ol>
            <li>Applicant must have no felonies.</li>
            <li>Applicant must provide a DNA ancestry test.</li>
            <li>Applicant must make a 500.00 application fee.</li>
        </ol>
    </div>
</template>

<script>

export default {
    data () {
        return {
            name: "Application Requirements",
            msg: "In order to make application to this faternity you must provide the following:",
            reqs: [
                { id: 0, text: 'Applicant must have no felonies.'},
                { id: 1, text: 'Applicant must provide a DNA ancestry test.'},
                { id: 2, text: 'Applicant must make a 500.00 application fee.'}
            ]
        }
    },
};
</script>

<style scoped>
   h2  {
       text-align: center;
   } 

   p {
       text-align: center;
   }

   ol  {
       text-align: left;
       margin-left: 485px;
   }
   
</style>
