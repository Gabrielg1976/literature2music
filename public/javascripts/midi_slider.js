function setBox(value) {
  $('instrument-name').innerHTML = inst[value];
}

// Midi Instrument List
function get_instrument_array() {
  var instruments = new Array();
  instruments[0] = "Acoustic Grand Piano";
  instruments[1] = "Acoustic Grand Piano";
  instruments[2] = "Bright Acoustic Piano";
  instruments[3] = "Electric Grand Piano";
  instruments[4] = "Honky-tonk Piano";
  instruments[5] = "Electric Piano 1";
  instruments[6] = "Electric Piano 2";
  instruments[7] = "Harpsicord";
  instruments[8] = "Clavi";
  instruments[9] = "Celesta";
  instruments[10] = "Glockenspiel";
  instruments[11] = "Music Box";
  instruments[12] = "Vibraphone";
  instruments[13] = "Marimba";
  instruments[14] = "Xylophone";
  instruments[15] = "Tubular Bells";
  instruments[16] = "Dulcimer";
  instruments[17] = "Drawbar Organ";
  instruments[18] = "Percussive Organ";
  instruments[19] = "Rock Organ";
  instruments[20] = "Church Organ";
  instruments[21] = "Reed Organ";
  instruments[22] = "Accordion";
  instruments[23] = "Harmonica";
  instruments[24] = "Tango Accordion";
  //  Guitar - Brass - Strings
  instruments[25] = "Acoustic Guitar (nylon)";
  instruments[26] = "Acoustic Guitar (steel)";
  instruments[27] = "Electric Guitar (jazz)";
  instruments[28] = "Electric Guitar (clean)";
  instruments[29] = "Electric Guitar (muted)";
  instruments[30] = "Overdriven Guitar";
  instruments[31] = "Distortion Guitar";
  instruments[32] = "Guitar Harmonics";
  instruments[33] = "Acoustic Bass";
  instruments[34] = "Electric Bass (finger)";
  instruments[35] = "Electric Bass (pick)";
  instruments[36] = "Fretless Bass";
  instruments[37] = "Slap Bass 1";
  instruments[38] = "Slap Bass 2";
  instruments[39] = "Synth Bass 1";
  instruments[40] = "Synth Bass 2";
  instruments[41] = "Violin";
  instruments[42] = "Viola";
  instruments[43] = "Cello";
  instruments[44] = "Contrabass";
  instruments[45] = "Tremolo Strings";
  instruments[46] = "Pizzicato Strings";
  instruments[47] = "Orchestral Harp";
  instruments[48] = "Timpani";
  // Ensemble  Brass  Reed
  instruments[49] = "String Ensemble 1";
  instruments[50] = "String Ensemble 2";
  instruments[51] = "Synth Strings 1";
  instruments[52] = "Synth Strings 2";
  instruments[53] = "Choir Aahs";
  instruments[54] = "Voice Oohs";
  instruments[55] = "Synth Voice";
  instruments[56] = "Orchestra Hit";
  instruments[57] = "Trumpet";
  instruments[58] = "Trombone";
  instruments[59] = "Tuba";
  instruments[60] = "Muted Trumpet";
  instruments[61] = "French Horn";
  instruments[62] = "Brass Section";
  instruments[63] = "Synth Brass 1";
  instruments[64] = "Synth Brass 2";
  instruments[65] = "Soprano Sax";
  instruments[66] = "Alto Sax";
  instruments[67] = "Tenor Sax";
  instruments[68] = "Baritone Sax";
  instruments[69] = "Oboe";
  instruments[70] = "English Horn";
  instruments[71] = "Bassoon";
  instruments[72] = "Clarinet";
  // Pipe - Synth Lead - Synth
  instruments[73] = "Piccolo";
  instruments[74] = "Flute";
  instruments[75] = "Recorder";
  instruments[76] = "Pan Flute";
  instruments[77] = "Blown Bottle";
  instruments[78] = "Shakuhachi";
  instruments[79] = "Whistle";
  instruments[80] = "Ocarina";
  instruments[81] = "Lead 1 (square)";
  instruments[82] = "Lead 2 (sawtooth)";
  instruments[83] = "Lead 3 (calliope)";
  instruments[84] = "Lead 4 (chiff)";
  instruments[85] = "Lead 5 (charang)";
  instruments[86] = "Lead 6 (voice)";
  instruments[87] = "Lead 7 (fifths)";
  instruments[88] = "Lead 8 (bass+lead)";
  instruments[89] = "Pad 1 (new age)";
  instruments[90] = "Pad 2 (warm)";
  instruments[91] = "Pad 3 (polysynth)";
  instruments[92] = "Pad 4 (choir)";
  instruments[93] = "Pad 5 (bowed)";
  instruments[94] = "Pad 6 (metallic)";
  instruments[95] = "Pad 7 (halo)";
  instruments[96] = "Pad 8 (sweep)";
  // Synth Effects - Ethnic - Percussive
  instruments[97] = "FX 1 (rain)";
  instruments[98] = "FX 2 (soundtrack)";
  instruments[99] = "FX 3 (crystal)";
  instruments[100] = "FX 4 (atmosphere)";
  instruments[101] = "FX 5 (brightness)";
  instruments[102] = "FX 6 (goblins)";
  instruments[103] = "FX 7 (echoes)";
  instruments[104] = "FX 8 (sci-fi)";
  instruments[105] = "Sitar";
  instruments[106] = "Banjo";
  instruments[107] = "Shamisen";
  instruments[108] = "Koto";
  instruments[109] = "Kalimba";
  instruments[110] = "Bagpipe";
  instruments[111] = "Fiddle";
  instruments[112] = "Shanai";
  instruments[113] = "Tinkle Bell";
  instruments[114] = "Agogo";
  instruments[115] = "Steel Drums";
  instruments[116] = "Woodblock";
  instruments[117] = "Taiko Drum";
  instruments[118] = "Melodic Tom";
  instruments[119] = "Synth Drum";
  instruments[120] = "Reverse Cymbal";
  // Sound Effects
  instruments[121] = "Guitar Fret Noise";
  instruments[122] = "Breath Noise";
  instruments[123] = "Seashore";
  instruments[124] = "Bird Tweet";
  instruments[125] = "Telephone Ring";
  instruments[126] = "Helicopter";
  instruments[127] = "Applause";
  instruments[128] = "Gunshot";
  return instruments;
}

var inst = get_instrument_array();
