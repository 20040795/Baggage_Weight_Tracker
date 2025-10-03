function checkweight() {
  const w1 = parseFloat(document.getElementById("weightCabin").value) || 0;
  const w2 = parseFloat(document.getElementById("weightCheckin").value) || 0;

  const flightData = JSON.parse(localStorage.getItem("selectedFlight"));
  const cabinLimit = flightData?.cabinLimit || 8;
  const checkinLimit = flightData?.checkinLimit || 40;

  const removeSection = document.getElementById("removeSection");
  const remlCabin = document.getElementById("remlCabin");
  const removedCabin = document.getElementById("removedCabin");
  const remlCheckin = document.getElementById("remlCheckin");
  const removedCheckin = document.getElementById("removedCheckin");
  const remB = document.getElementById("remB");

  let overweight = false;

  if (w1 > cabinLimit && w2 > checkinLimit) {
    Swal.fire({
      icon: 'error',
      title: 'Overweight',
      text: `Both Cabin and Check-in bags exceed limits.\nCabin limit: ${cabinLimit}kg, Check-in limit: ${checkinLimit}kg.`,
    });
    overweight = true;
    remlCabin.classList.remove("hidden");
    removedCabin.classList.remove("hidden");
    remlCheckin.classList.remove("hidden");
    removedCheckin.classList.remove("hidden");
  } else if (w1 > cabinLimit) {
    Swal.fire({
      icon: 'warning',
      title: 'Cabin Overweight',
      text: `Cabin bag exceeds the ${cabinLimit}kg limit.`,
    });
    overweight = true;
    remlCabin.classList.remove("hidden");
    removedCabin.classList.remove("hidden");
    remlCheckin.classList.add("hidden");
    removedCheckin.classList.add("hidden");
  } else if (w2 > checkinLimit) {
    Swal.fire({
      icon: 'warning',
      title: 'Check-in Overweight',
      text: `Check-in bag exceeds the ${checkinLimit}kg limit.`,
    });
    overweight = true;
    remlCheckin.classList.remove("hidden");
    removedCheckin.classList.remove("hidden");
    remlCabin.classList.add("hidden");
    removedCabin.classList.add("hidden");
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Safe Limit!',
      text: 'Your luggage is within the allowed weight.',
    });
    removeSection.classList.add("hidden");
    return;
  }

  if (overweight) {
    removeSection.classList.remove("hidden");
    remB.classList.remove("hidden");
  }
}

function removeWeight() {
  let wcb = parseFloat(document.getElementById("weightCabin").value) || 0;
  let wcin = parseFloat(document.getElementById("weightCheckin").value) || 0;
  const rvCabin = parseFloat(document.getElementById("removedCabin").value) || 0;
  const rvCheckin = parseFloat(document.getElementById("removedCheckin").value) || 0;

  const flightData = JSON.parse(localStorage.getItem("selectedFlight"));
  const cabinLimit = flightData?.cabinLimit || 8;
  const checkinLimit = flightData?.checkinLimit || 40;

  if (wcb > cabinLimit) {
    wcb = Math.max(0, wcb - rvCabin);
    document.getElementById("weightCabin").value = wcb;
  }

  if (wcin > checkinLimit) {
    wcin = Math.max(0, wcin - rvCheckin);
    document.getElementById("weightCheckin").value = wcin;
  }

  if (wcb <= cabinLimit && wcin <= checkinLimit) {
    Swal.fire({
      icon: 'success',
      title: 'Weight Adjusted!',
      text: 'You may now proceed with check-in.',
    });
    document.getElementById("removeSection").classList.add("hidden");
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Still Overweight',
      text: 'Please remove more weight.',
    });
  }
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    window.location.href = "home.html";
    return false;
  } else {
    alert("Invalid credentials. Try again.");
    return false;
  }
}
