<template>
    <div>
        <h2>Contact Us</h2>

        <slot name="top"></slot>

        <form action="">
            <div class="form-group">
                <label for="yourName">Your name</label>
                <input type="text" class="form-control" id="yourName" placeholder="Enter your name">
            </div>

            <div class="form-group">
                <label for="emailAddress">E-mail Address</label>
                <input type="email" class="form-control" id="emailAddress" placeholder="Enter your Email">
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea name="" id="message" 
                    cols="30" rows="10" 
                    class="form-control" 
                    placeholder="Enter your Message"></textarea>
            </div>

            <slot name="bottom">
                <p>We will be get back to you.</p>
            </slot>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>
