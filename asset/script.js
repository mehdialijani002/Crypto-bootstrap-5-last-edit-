/**
 * Dialogs factory
 *
 * @name      {string}   Dialog name.
 * @Factory   {Function} Dialog factory function.
 * @transient {Boolean}  Indicates whether to create a singleton or transient dialog.
 * @base      {String}   The name of an existing dialog to inherit from.
 *
 * alertify.dialog(name, Factory, transient, base)
 *
 */

if (!alertify.myAlert) {
  //define a new dialog
  alertify.dialog("myAlert", function factory() {
    return {
      main: function (message) {
        this.message = message;
      },
      setup: function () {
        return {
          buttons: [{ text: "ادامه", key: 27 /*Esc*/ }],
          focus: { element: 0 },
        };
      },
      prepare: function () {
        this.setContent(this.message);
      },
    };
  });
}

const demo = document.querySelector("#demo-none");
demo.addEventListener("click", function () {
  form.reset();
});

function checkOutput() {
  const to = document.querySelector("#to");
  const full = document.querySelectorAll(".bg-danger");
  const amountInput = document.getElementById("amount");

  if (amountInput.value === "") {
    alertify.alert("ارز دیجیتال", "لطفا جدول را کامل کنید");
    return;
  }
  let selectedOption = to.value;
  let selectedOption1 = full.value;
  let isValidOption = false;
  full.forEach((option) => {
    if (option.value === selectedOption) {
      isValidOption = true;
    }
  });
  if (!isValidOption) {
    swal({
      title: "    اطلاعات جدول شما حذف شد",
      text: "لطفا جدول را به درستی کامل کنید",
      icon: "info",
      button: "متوجه شدم",
    });

    return;
  }
  if (isValidOption && amountInput.value !== "") {
    swal({
      title: "تبدیل با موفقیت انجام شد",
      text: "ممنون از انتخاب شما",
      icon: "success",
      button: "ادامه",
    });
  }
}
const lastInput = document.getElementById("success");
const form = document.querySelector(".form");
lastInput.addEventListener("click", function () {
  form.reset();
});

const toggles = document.querySelectorAll(".faq-toggle,.faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

function myFunction1() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo1").innerHTML;
}

function myFunction2() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo2").innerHTML;
}

function myFunction3() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo3").innerHTML;
}

function myFunction4() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo4").innerHTML;
}

function myFunction5() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo5").innerHTML;
}

function myFunction6() {
  document.querySelector("#demo").innerHTML =
    document.querySelector("#demo6").innerHTML;
}

const scrollButtons = document.querySelectorAll("#scrollButton");
const forms = document.querySelector(".convert");

scrollButtons.forEach(function (scrollButton) {
  scrollButton.addEventListener("click", function () {
    forms.scrollIntoView({ behavior: "smooth" });
  });
});
