<template>
  <form
    class="jotform-form"
    action="https://submit.jotform.com/submit/221067297999070/"
    method="post"
    name="form_221067297999070"
    id="221067297999070"
    accept-charset="utf-8"
    autocomplete="on"
  >
    <input type="hidden" name="formID" value="221067297999070" />
    <input type="hidden" id="JWTContainer" value="" />
    <input type="hidden" id="cardinalOrderNumber" value="" />
    <div role="main" class="form-all">
      
      <ul class="form-section page-section">
        <li class="form-line" data-type="control_textbox" id="id_5">
          <div id="cid_5" class="form-input-wide" data-layout="half">
            <input
              type="text"
              id="input_5"
              name="q5_fullName"
              data-type="input-textbox"
              class="form-textbox"
              data-defaultvalue=""
              style="width: 310px"
              size="310"
              value=""
              data-component="textbox"
              aria-labelledby="label_5"
              placeholder="Type your Full Name here"
            />
          </div>
        </li>
        <li class="form-line" data-type="control_email" id="id_7">
          <div id="cid_7" class="form-input-wide" data-layout="half">
              <input
                type="email"
                id="input_7"
                name="q7_email"
                class="form-textbox validate[Email]"
                data-defaultvalue=""
                style="width: 310px"
                size="310"
                value=""
                data-component="email"
                aria-labelledby="label_7 sublabel_input_7"
                placeholder="Type your email here"
              />
          </div>
        </li>
        <li class="form-line" data-type="control_textarea" id="id_8">
          <div id="cid_8" class="form-input-wide" data-layout="full">
            <textarea
              id="input_8"
              class="form-textarea"
              name="q8_message"
              style="width: 648px; height: 163px"
              data-component="textarea"
              aria-labelledby="label_8"
              placeholder="Type your message here"
            ></textarea>
          </div>
        </li>
        <li class="form-line" data-type="control_button" id="id_9">
          <div id="cid_9" class="form-input-wide" data-layout="full">
            <div
              data-align="left"
              class="
                form-buttons-wrapper form-buttons-left
                jsTest-button-wrapperField
              "
            >
              <button
                id="input_9"
                type="submit"
                class="
                  form-submit-button
                  submit-button
                  jf-form-buttons
                  jsTest-submitField
                  button2
                "
                data-component="button"
                data-content=""
              >
                Submit
              </button>
            </div>
          </div>
        </li>
        
        <li style="display: none">
          Should be Empty:
          <input type="text" name="website" value="" />
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Form',
})
</script>

<style>
.form-all:before {
    background: none;
}
.form-section{
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 600px;
}

.form-section > li{
    display: flex;
    margin-top: 20px;
}

.form-section > li > div{
    display: flex;
    width: 100%;
}

form input{
    padding: 8px;
    width: 100% !important;
    margin: 0;
    font-size: 14px;
    border: 1px solid rgb(200, 200, 200);
}

form textarea {
    padding: 8px;
    width: 100% !important;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    border: 1px solid rgb(200, 200, 200);
}

form button{
    max-width: 100%;
    width: 250px;
    margin: 0 auto;
    background: white;
}

.form-buttons-wrapper{
    width: 100%;
}

.button2{
  border: none;
  background: white;
  font-size: 16px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.13);
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s;
}

.button2:hover{
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.23);
  margin-top: -2px;
}

</style>