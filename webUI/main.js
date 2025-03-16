const $effekt = {  };

class Tuple_0 {
  constructor(first_0, second_0) {
    this.__tag = 0;
    this.first_0 = first_0;
    this.second_0 = second_0;
  }
  __reflect() {
    return {
      __tag: 0,
      __name: "Tuple2",
      __data: [this.first_0, this.second_0]
    };
  }
  __equals(other85337) {
    if (!other85337) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85337.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.first_0, other85337.first_0))) {
      return false;
    }
    if (!($effekt.equals(this.second_0, other85337.second_0))) {
      return false;
    }
    return true;
  }
}

class OutOfBounds_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "OutOfBounds", __data: [] };
  }
  __equals(other85338) {
    if (!other85338) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85338.__tag))) {
      return false;
    }
    return true;
  }
}

class None_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "None", __data: [] };
  }
  __equals(other85339) {
    if (!other85339) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85339.__tag))) {
      return false;
    }
    return true;
  }
}

class Some_0 {
  constructor(value_0) {
    this.__tag = 1;
    this.value_0 = value_0;
  }
  __reflect() {
    return { __tag: 1, __name: "Some", __data: [this.value_0] };
  }
  __equals(other85340) {
    if (!other85340) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85340.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.value_0, other85340.value_0))) {
      return false;
    }
    return true;
  }
}

class Nil_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Nil", __data: [] };
  }
  __equals(other85341) {
    if (!other85341) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85341.__tag))) {
      return false;
    }
    return true;
  }
}

class Cons_0 {
  constructor(head_0, tail_0) {
    this.__tag = 1;
    this.head_0 = head_0;
    this.tail_0 = tail_0;
  }
  __reflect() {
    return { __tag: 1, __name: "Cons", __data: [this.head_0, this.tail_0] };
  }
  __equals(other85342) {
    if (!other85342) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85342.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.head_0, other85342.head_0))) {
      return false;
    }
    if (!($effekt.equals(this.tail_0, other85342.tail_0))) {
      return false;
    }
    return true;
  }
}

class Empty_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Empty", __data: [] };
  }
  __equals(other85343) {
    if (!other85343) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85343.__tag))) {
      return false;
    }
    return true;
  }
}

class Sentence_0 {
  constructor(subjects_0, predicates_0) {
    this.__tag = 1;
    this.subjects_0 = subjects_0;
    this.predicates_0 = predicates_0;
  }
  __reflect() {
    return {
      __tag: 1,
      __name: "Sentence",
      __data: [this.subjects_0, this.predicates_0]
    };
  }
  __equals(other85344) {
    if (!other85344) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85344.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.subjects_0, other85344.subjects_0))) {
      return false;
    }
    if (!($effekt.equals(this.predicates_0, other85344.predicates_0))) {
      return false;
    }
    return true;
  }
}

class Predicate_0 {
  constructor(verb_0, objects_0, prepositions_0) {
    this.__tag = 2;
    this.verb_0 = verb_0;
    this.objects_0 = objects_0;
    this.prepositions_0 = prepositions_0;
  }
  __reflect() {
    return {
      __tag: 2,
      __name: "Predicate",
      __data: [this.verb_0, this.objects_0, this.prepositions_0]
    };
  }
  __equals(other85345) {
    if (!other85345) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85345.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.verb_0, other85345.verb_0))) {
      return false;
    }
    if (!($effekt.equals(this.objects_0, other85345.objects_0))) {
      return false;
    }
    if (!($effekt.equals(this.prepositions_0, other85345.prepositions_0))) {
      return false;
    }
    return true;
  }
}

class ModifierLeaf_0 {
  constructor(head_1, modifiers_0) {
    this.__tag = 3;
    this.head_1 = head_1;
    this.modifiers_0 = modifiers_0;
  }
  __reflect() {
    return {
      __tag: 3,
      __name: "ModifierLeaf",
      __data: [this.head_1, this.modifiers_0]
    };
  }
  __equals(other85346) {
    if (!other85346) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85346.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.head_1, other85346.head_1))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_0, other85346.modifiers_0))) {
      return false;
    }
    return true;
  }
}

class AdverbLeaf_0 {
  constructor(head_2, modifiers_1) {
    this.__tag = 4;
    this.head_2 = head_2;
    this.modifiers_1 = modifiers_1;
  }
  __reflect() {
    return {
      __tag: 4,
      __name: "AdverbLeaf",
      __data: [this.head_2, this.modifiers_1]
    };
  }
  __equals(other85347) {
    if (!other85347) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85347.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.head_2, other85347.head_2))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_1, other85347.modifiers_1))) {
      return false;
    }
    return true;
  }
}

class TokiPonaVerbLeaf_0 {
  constructor(preverb_0, head_3, modifiers_2) {
    this.__tag = 5;
    this.preverb_0 = preverb_0;
    this.head_3 = head_3;
    this.modifiers_2 = modifiers_2;
  }
  __reflect() {
    return {
      __tag: 5,
      __name: "TokiPonaVerbLeaf",
      __data: [this.preverb_0, this.head_3, this.modifiers_2]
    };
  }
  __equals(other85348) {
    if (!other85348) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85348.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.preverb_0, other85348.preverb_0))) {
      return false;
    }
    if (!($effekt.equals(this.head_3, other85348.head_3))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_2, other85348.modifiers_2))) {
      return false;
    }
    return true;
  }
}

class EnglishVerbLeaf_0 {
  constructor(preverb_1, head_4, modifiers_3, negation_0) {
    this.__tag = 6;
    this.preverb_1 = preverb_1;
    this.head_4 = head_4;
    this.modifiers_3 = modifiers_3;
    this.negation_0 = negation_0;
  }
  __reflect() {
    return {
      __tag: 6,
      __name: "EnglishVerbLeaf",
      __data: [this.preverb_1, this.head_4, this.modifiers_3, this.negation_0]
    };
  }
  __equals(other85349) {
    if (!other85349) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85349.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.preverb_1, other85349.preverb_1))) {
      return false;
    }
    if (!($effekt.equals(this.head_4, other85349.head_4))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_3, other85349.modifiers_3))) {
      return false;
    }
    if (!($effekt.equals(this.negation_0, other85349.negation_0))) {
      return false;
    }
    return true;
  }
}

class ObjectLeaf_0 {
  constructor(head_5, modifiers_4) {
    this.__tag = 7;
    this.head_5 = head_5;
    this.modifiers_4 = modifiers_4;
  }
  __reflect() {
    return {
      __tag: 7,
      __name: "ObjectLeaf",
      __data: [this.head_5, this.modifiers_4]
    };
  }
  __equals(other85350) {
    if (!other85350) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85350.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.head_5, other85350.head_5))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_4, other85350.modifiers_4))) {
      return false;
    }
    return true;
  }
}

class SubjectLeaf_0 {
  constructor(head_6, modifiers_5) {
    this.__tag = 8;
    this.head_6 = head_6;
    this.modifiers_5 = modifiers_5;
  }
  __reflect() {
    return {
      __tag: 8,
      __name: "SubjectLeaf",
      __data: [this.head_6, this.modifiers_5]
    };
  }
  __equals(other85351) {
    if (!other85351) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85351.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.head_6, other85351.head_6))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_5, other85351.modifiers_5))) {
      return false;
    }
    return true;
  }
}

class PrepositionsLeaf_0 {
  constructor(prep_0, head_7, modifiers_6) {
    this.__tag = 9;
    this.prep_0 = prep_0;
    this.head_7 = head_7;
    this.modifiers_6 = modifiers_6;
  }
  __reflect() {
    return {
      __tag: 9,
      __name: "PrepositionsLeaf",
      __data: [this.prep_0, this.head_7, this.modifiers_6]
    };
  }
  __equals(other85352) {
    if (!other85352) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85352.__tag))) {
      return false;
    }
    if (!($effekt.equals(this.prep_0, other85352.prep_0))) {
      return false;
    }
    if (!($effekt.equals(this.head_7, other85352.head_7))) {
      return false;
    }
    if (!($effekt.equals(this.modifiers_6, other85352.modifiers_6))) {
      return false;
    }
    return true;
  }
}

class Subject_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Subject", __data: [] };
  }
  __equals(other85353) {
    if (!other85353) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85353.__tag))) {
      return false;
    }
    return true;
  }
}

class Object_0 {
  constructor() {
    this.__tag = 1;
  }
  __reflect() {
    return { __tag: 1, __name: "Object", __data: [] };
  }
  __equals(other85354) {
    if (!other85354) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85354.__tag))) {
      return false;
    }
    return true;
  }
}

class Verb_0 {
  constructor() {
    this.__tag = 2;
  }
  __reflect() {
    return { __tag: 2, __name: "Verb", __data: [] };
  }
  __equals(other85355) {
    if (!other85355) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85355.__tag))) {
      return false;
    }
    return true;
  }
}

class Preposition_0 {
  constructor() {
    this.__tag = 3;
  }
  __reflect() {
    return { __tag: 3, __name: "Preposition", __data: [] };
  }
  __equals(other85356) {
    if (!other85356) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85356.__tag))) {
      return false;
    }
    return true;
  }
}

class Preverb_0 {
  constructor() {
    this.__tag = 4;
  }
  __reflect() {
    return { __tag: 4, __name: "Preverb", __data: [] };
  }
  __equals(other85357) {
    if (!other85357) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85357.__tag))) {
      return false;
    }
    return true;
  }
}

class Adverb_0 {
  constructor() {
    this.__tag = 5;
  }
  __reflect() {
    return { __tag: 5, __name: "Adverb", __data: [] };
  }
  __equals(other85358) {
    if (!other85358) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85358.__tag))) {
      return false;
    }
    return true;
  }
}

class Adjective_0 {
  constructor() {
    this.__tag = 6;
  }
  __reflect() {
    return { __tag: 6, __name: "Adjective", __data: [] };
  }
  __equals(other85359) {
    if (!other85359) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85359.__tag))) {
      return false;
    }
    return true;
  }
}

class Nothing_0 {
  constructor() {
    this.__tag = 7;
  }
  __reflect() {
    return { __tag: 7, __name: "Nothing", __data: [] };
  }
  __equals(other85360) {
    if (!other85360) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85360.__tag))) {
      return false;
    }
    return true;
  }
}

class Plural_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "Plural", __data: [] };
  }
  __equals(other85361) {
    if (!other85361) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85361.__tag))) {
      return false;
    }
    return true;
  }
}

class Singular_0 {
  constructor() {
    this.__tag = 1;
  }
  __reflect() {
    return { __tag: 1, __name: "Singular", __data: [] };
  }
  __equals(other85362) {
    if (!other85362) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85362.__tag))) {
      return false;
    }
    return true;
  }
}

class FirstMeaning_0 {
  constructor() {
    this.__tag = 2;
  }
  __reflect() {
    return { __tag: 2, __name: "FirstMeaning", __data: [] };
  }
  __equals(other85363) {
    if (!other85363) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85363.__tag))) {
      return false;
    }
    return true;
  }
}

class SecondMeaning_0 {
  constructor() {
    this.__tag = 3;
  }
  __reflect() {
    return { __tag: 3, __name: "SecondMeaning", __data: [] };
  }
  __equals(other85364) {
    if (!other85364) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85364.__tag))) {
      return false;
    }
    return true;
  }
}

class First_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "First", __data: [] };
  }
  __equals(other85365) {
    if (!other85365) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85365.__tag))) {
      return false;
    }
    return true;
  }
}

class NotThird_0 {
  constructor() {
    this.__tag = 1;
  }
  __reflect() {
    return { __tag: 1, __name: "NotThird", __data: [] };
  }
  __equals(other85366) {
    if (!other85366) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85366.__tag))) {
      return false;
    }
    return true;
  }
}

class E_0 {
  constructor() {
    this.__tag = 0;
  }
  __reflect() {
    return { __tag: 0, __name: "E2BIG", __data: [] };
  }
  __equals(other85367) {
    if (!other85367) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85367.__tag))) {
      return false;
    }
    return true;
  }
}

class EACCES_0 {
  constructor() {
    this.__tag = 1;
  }
  __reflect() {
    return { __tag: 1, __name: "EACCES", __data: [] };
  }
  __equals(other85368) {
    if (!other85368) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85368.__tag))) {
      return false;
    }
    return true;
  }
}

class EADDRINUSE_0 {
  constructor() {
    this.__tag = 2;
  }
  __reflect() {
    return { __tag: 2, __name: "EADDRINUSE", __data: [] };
  }
  __equals(other85369) {
    if (!other85369) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85369.__tag))) {
      return false;
    }
    return true;
  }
}

class EADDRNOTAVAIL_0 {
  constructor() {
    this.__tag = 3;
  }
  __reflect() {
    return { __tag: 3, __name: "EADDRNOTAVAIL", __data: [] };
  }
  __equals(other85370) {
    if (!other85370) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85370.__tag))) {
      return false;
    }
    return true;
  }
}

class EAFNOSUPPORT_0 {
  constructor() {
    this.__tag = 4;
  }
  __reflect() {
    return { __tag: 4, __name: "EAFNOSUPPORT", __data: [] };
  }
  __equals(other85371) {
    if (!other85371) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85371.__tag))) {
      return false;
    }
    return true;
  }
}

class EAGAIN_0 {
  constructor() {
    this.__tag = 5;
  }
  __reflect() {
    return { __tag: 5, __name: "EAGAIN", __data: [] };
  }
  __equals(other85372) {
    if (!other85372) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85372.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_ADDRFAMILY_0 {
  constructor() {
    this.__tag = 6;
  }
  __reflect() {
    return { __tag: 6, __name: "EAI_ADDRFAMILY", __data: [] };
  }
  __equals(other85373) {
    if (!other85373) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85373.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_AGAIN_0 {
  constructor() {
    this.__tag = 7;
  }
  __reflect() {
    return { __tag: 7, __name: "EAI_AGAIN", __data: [] };
  }
  __equals(other85374) {
    if (!other85374) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85374.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_BADFLAGS_0 {
  constructor() {
    this.__tag = 8;
  }
  __reflect() {
    return { __tag: 8, __name: "EAI_BADFLAGS", __data: [] };
  }
  __equals(other85375) {
    if (!other85375) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85375.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_BADHINTS_0 {
  constructor() {
    this.__tag = 9;
  }
  __reflect() {
    return { __tag: 9, __name: "EAI_BADHINTS", __data: [] };
  }
  __equals(other85376) {
    if (!other85376) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85376.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_CANCELED_0 {
  constructor() {
    this.__tag = 10;
  }
  __reflect() {
    return { __tag: 10, __name: "EAI_CANCELED", __data: [] };
  }
  __equals(other85377) {
    if (!other85377) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85377.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_FAIL_0 {
  constructor() {
    this.__tag = 11;
  }
  __reflect() {
    return { __tag: 11, __name: "EAI_FAIL", __data: [] };
  }
  __equals(other85378) {
    if (!other85378) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85378.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_FAMILY_0 {
  constructor() {
    this.__tag = 12;
  }
  __reflect() {
    return { __tag: 12, __name: "EAI_FAMILY", __data: [] };
  }
  __equals(other85379) {
    if (!other85379) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85379.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_MEMORY_0 {
  constructor() {
    this.__tag = 13;
  }
  __reflect() {
    return { __tag: 13, __name: "EAI_MEMORY", __data: [] };
  }
  __equals(other85380) {
    if (!other85380) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85380.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_NODATA_0 {
  constructor() {
    this.__tag = 14;
  }
  __reflect() {
    return { __tag: 14, __name: "EAI_NODATA", __data: [] };
  }
  __equals(other85381) {
    if (!other85381) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85381.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_NONAME_0 {
  constructor() {
    this.__tag = 15;
  }
  __reflect() {
    return { __tag: 15, __name: "EAI_NONAME", __data: [] };
  }
  __equals(other85382) {
    if (!other85382) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85382.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_OVERFLOW_0 {
  constructor() {
    this.__tag = 16;
  }
  __reflect() {
    return { __tag: 16, __name: "EAI_OVERFLOW", __data: [] };
  }
  __equals(other85383) {
    if (!other85383) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85383.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_PROTOCOL_0 {
  constructor() {
    this.__tag = 17;
  }
  __reflect() {
    return { __tag: 17, __name: "EAI_PROTOCOL", __data: [] };
  }
  __equals(other85384) {
    if (!other85384) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85384.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_SERVICE_0 {
  constructor() {
    this.__tag = 18;
  }
  __reflect() {
    return { __tag: 18, __name: "EAI_SERVICE", __data: [] };
  }
  __equals(other85385) {
    if (!other85385) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85385.__tag))) {
      return false;
    }
    return true;
  }
}

class EAI_SOCKTYPE_0 {
  constructor() {
    this.__tag = 19;
  }
  __reflect() {
    return { __tag: 19, __name: "EAI_SOCKTYPE", __data: [] };
  }
  __equals(other85386) {
    if (!other85386) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85386.__tag))) {
      return false;
    }
    return true;
  }
}

class EALREADY_0 {
  constructor() {
    this.__tag = 20;
  }
  __reflect() {
    return { __tag: 20, __name: "EALREADY", __data: [] };
  }
  __equals(other85387) {
    if (!other85387) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85387.__tag))) {
      return false;
    }
    return true;
  }
}

class EBADF_0 {
  constructor() {
    this.__tag = 21;
  }
  __reflect() {
    return { __tag: 21, __name: "EBADF", __data: [] };
  }
  __equals(other85388) {
    if (!other85388) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85388.__tag))) {
      return false;
    }
    return true;
  }
}

class EBUSY_0 {
  constructor() {
    this.__tag = 22;
  }
  __reflect() {
    return { __tag: 22, __name: "EBUSY", __data: [] };
  }
  __equals(other85389) {
    if (!other85389) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85389.__tag))) {
      return false;
    }
    return true;
  }
}

class ECANCELED_0 {
  constructor() {
    this.__tag = 23;
  }
  __reflect() {
    return { __tag: 23, __name: "ECANCELED", __data: [] };
  }
  __equals(other85390) {
    if (!other85390) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85390.__tag))) {
      return false;
    }
    return true;
  }
}

class ECHARSET_0 {
  constructor() {
    this.__tag = 24;
  }
  __reflect() {
    return { __tag: 24, __name: "ECHARSET", __data: [] };
  }
  __equals(other85391) {
    if (!other85391) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85391.__tag))) {
      return false;
    }
    return true;
  }
}

class ECONNABORTED_0 {
  constructor() {
    this.__tag = 25;
  }
  __reflect() {
    return { __tag: 25, __name: "ECONNABORTED", __data: [] };
  }
  __equals(other85392) {
    if (!other85392) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85392.__tag))) {
      return false;
    }
    return true;
  }
}

class ECONNREFUSED_0 {
  constructor() {
    this.__tag = 26;
  }
  __reflect() {
    return { __tag: 26, __name: "ECONNREFUSED", __data: [] };
  }
  __equals(other85393) {
    if (!other85393) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85393.__tag))) {
      return false;
    }
    return true;
  }
}

class ECONNRESET_0 {
  constructor() {
    this.__tag = 27;
  }
  __reflect() {
    return { __tag: 27, __name: "ECONNRESET", __data: [] };
  }
  __equals(other85394) {
    if (!other85394) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85394.__tag))) {
      return false;
    }
    return true;
  }
}

class EDESTADDRREQ_0 {
  constructor() {
    this.__tag = 28;
  }
  __reflect() {
    return { __tag: 28, __name: "EDESTADDRREQ", __data: [] };
  }
  __equals(other85395) {
    if (!other85395) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85395.__tag))) {
      return false;
    }
    return true;
  }
}

class EEXIST_0 {
  constructor() {
    this.__tag = 29;
  }
  __reflect() {
    return { __tag: 29, __name: "EEXIST", __data: [] };
  }
  __equals(other85396) {
    if (!other85396) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85396.__tag))) {
      return false;
    }
    return true;
  }
}

class EFAULT_0 {
  constructor() {
    this.__tag = 30;
  }
  __reflect() {
    return { __tag: 30, __name: "EFAULT", __data: [] };
  }
  __equals(other85397) {
    if (!other85397) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85397.__tag))) {
      return false;
    }
    return true;
  }
}

class EFBIG_0 {
  constructor() {
    this.__tag = 31;
  }
  __reflect() {
    return { __tag: 31, __name: "EFBIG", __data: [] };
  }
  __equals(other85398) {
    if (!other85398) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85398.__tag))) {
      return false;
    }
    return true;
  }
}

class EHOSTUNREACH_0 {
  constructor() {
    this.__tag = 32;
  }
  __reflect() {
    return { __tag: 32, __name: "EHOSTUNREACH", __data: [] };
  }
  __equals(other85399) {
    if (!other85399) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85399.__tag))) {
      return false;
    }
    return true;
  }
}

class EINTR_0 {
  constructor() {
    this.__tag = 33;
  }
  __reflect() {
    return { __tag: 33, __name: "EINTR", __data: [] };
  }
  __equals(other85400) {
    if (!other85400) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85400.__tag))) {
      return false;
    }
    return true;
  }
}

class EINVAL_0 {
  constructor() {
    this.__tag = 34;
  }
  __reflect() {
    return { __tag: 34, __name: "EINVAL", __data: [] };
  }
  __equals(other85401) {
    if (!other85401) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85401.__tag))) {
      return false;
    }
    return true;
  }
}

class EIO_0 {
  constructor() {
    this.__tag = 35;
  }
  __reflect() {
    return { __tag: 35, __name: "EIO", __data: [] };
  }
  __equals(other85402) {
    if (!other85402) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85402.__tag))) {
      return false;
    }
    return true;
  }
}

class EISCONN_0 {
  constructor() {
    this.__tag = 36;
  }
  __reflect() {
    return { __tag: 36, __name: "EISCONN", __data: [] };
  }
  __equals(other85403) {
    if (!other85403) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85403.__tag))) {
      return false;
    }
    return true;
  }
}

class EISDIR_0 {
  constructor() {
    this.__tag = 37;
  }
  __reflect() {
    return { __tag: 37, __name: "EISDIR", __data: [] };
  }
  __equals(other85404) {
    if (!other85404) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85404.__tag))) {
      return false;
    }
    return true;
  }
}

class ELOOP_0 {
  constructor() {
    this.__tag = 38;
  }
  __reflect() {
    return { __tag: 38, __name: "ELOOP", __data: [] };
  }
  __equals(other85405) {
    if (!other85405) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85405.__tag))) {
      return false;
    }
    return true;
  }
}

class EMFILE_0 {
  constructor() {
    this.__tag = 39;
  }
  __reflect() {
    return { __tag: 39, __name: "EMFILE", __data: [] };
  }
  __equals(other85406) {
    if (!other85406) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85406.__tag))) {
      return false;
    }
    return true;
  }
}

class EMSGSIZE_0 {
  constructor() {
    this.__tag = 40;
  }
  __reflect() {
    return { __tag: 40, __name: "EMSGSIZE", __data: [] };
  }
  __equals(other85407) {
    if (!other85407) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85407.__tag))) {
      return false;
    }
    return true;
  }
}

class ENAMETOOLONG_0 {
  constructor() {
    this.__tag = 41;
  }
  __reflect() {
    return { __tag: 41, __name: "ENAMETOOLONG", __data: [] };
  }
  __equals(other85408) {
    if (!other85408) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85408.__tag))) {
      return false;
    }
    return true;
  }
}

class ENETDOWN_0 {
  constructor() {
    this.__tag = 42;
  }
  __reflect() {
    return { __tag: 42, __name: "ENETDOWN", __data: [] };
  }
  __equals(other85409) {
    if (!other85409) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85409.__tag))) {
      return false;
    }
    return true;
  }
}

class ENETUNREACH_0 {
  constructor() {
    this.__tag = 43;
  }
  __reflect() {
    return { __tag: 43, __name: "ENETUNREACH", __data: [] };
  }
  __equals(other85410) {
    if (!other85410) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85410.__tag))) {
      return false;
    }
    return true;
  }
}

class ENFILE_0 {
  constructor() {
    this.__tag = 44;
  }
  __reflect() {
    return { __tag: 44, __name: "ENFILE", __data: [] };
  }
  __equals(other85411) {
    if (!other85411) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85411.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOBUFS_0 {
  constructor() {
    this.__tag = 45;
  }
  __reflect() {
    return { __tag: 45, __name: "ENOBUFS", __data: [] };
  }
  __equals(other85412) {
    if (!other85412) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85412.__tag))) {
      return false;
    }
    return true;
  }
}

class ENODEV_0 {
  constructor() {
    this.__tag = 46;
  }
  __reflect() {
    return { __tag: 46, __name: "ENODEV", __data: [] };
  }
  __equals(other85413) {
    if (!other85413) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85413.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOENT_0 {
  constructor() {
    this.__tag = 47;
  }
  __reflect() {
    return { __tag: 47, __name: "ENOENT", __data: [] };
  }
  __equals(other85414) {
    if (!other85414) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85414.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOMEM_0 {
  constructor() {
    this.__tag = 48;
  }
  __reflect() {
    return { __tag: 48, __name: "ENOMEM", __data: [] };
  }
  __equals(other85415) {
    if (!other85415) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85415.__tag))) {
      return false;
    }
    return true;
  }
}

class ENONET_0 {
  constructor() {
    this.__tag = 49;
  }
  __reflect() {
    return { __tag: 49, __name: "ENONET", __data: [] };
  }
  __equals(other85416) {
    if (!other85416) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85416.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOPROTOOPT_0 {
  constructor() {
    this.__tag = 50;
  }
  __reflect() {
    return { __tag: 50, __name: "ENOPROTOOPT", __data: [] };
  }
  __equals(other85417) {
    if (!other85417) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85417.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOSPC_0 {
  constructor() {
    this.__tag = 51;
  }
  __reflect() {
    return { __tag: 51, __name: "ENOSPC", __data: [] };
  }
  __equals(other85418) {
    if (!other85418) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85418.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOTCONN_0 {
  constructor() {
    this.__tag = 52;
  }
  __reflect() {
    return { __tag: 52, __name: "ENOTCONN", __data: [] };
  }
  __equals(other85419) {
    if (!other85419) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85419.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOTDIR_0 {
  constructor() {
    this.__tag = 53;
  }
  __reflect() {
    return { __tag: 53, __name: "ENOTDIR", __data: [] };
  }
  __equals(other85420) {
    if (!other85420) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85420.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOTSOCK_0 {
  constructor() {
    this.__tag = 54;
  }
  __reflect() {
    return { __tag: 54, __name: "ENOTSOCK", __data: [] };
  }
  __equals(other85421) {
    if (!other85421) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85421.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOTSUP_0 {
  constructor() {
    this.__tag = 55;
  }
  __reflect() {
    return { __tag: 55, __name: "ENOTSUP", __data: [] };
  }
  __equals(other85422) {
    if (!other85422) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85422.__tag))) {
      return false;
    }
    return true;
  }
}

class EOVERFLOW_0 {
  constructor() {
    this.__tag = 56;
  }
  __reflect() {
    return { __tag: 56, __name: "EOVERFLOW", __data: [] };
  }
  __equals(other85423) {
    if (!other85423) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85423.__tag))) {
      return false;
    }
    return true;
  }
}

class EPERM_0 {
  constructor() {
    this.__tag = 57;
  }
  __reflect() {
    return { __tag: 57, __name: "EPERM", __data: [] };
  }
  __equals(other85424) {
    if (!other85424) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85424.__tag))) {
      return false;
    }
    return true;
  }
}

class EPIPE_0 {
  constructor() {
    this.__tag = 58;
  }
  __reflect() {
    return { __tag: 58, __name: "EPIPE", __data: [] };
  }
  __equals(other85425) {
    if (!other85425) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85425.__tag))) {
      return false;
    }
    return true;
  }
}

class EPROTONOSUPPORT_0 {
  constructor() {
    this.__tag = 59;
  }
  __reflect() {
    return { __tag: 59, __name: "EPROTONOSUPPORT", __data: [] };
  }
  __equals(other85426) {
    if (!other85426) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85426.__tag))) {
      return false;
    }
    return true;
  }
}

class EPROTOTYPE_0 {
  constructor() {
    this.__tag = 60;
  }
  __reflect() {
    return { __tag: 60, __name: "EPROTOTYPE", __data: [] };
  }
  __equals(other85427) {
    if (!other85427) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85427.__tag))) {
      return false;
    }
    return true;
  }
}

class ERANGE_0 {
  constructor() {
    this.__tag = 61;
  }
  __reflect() {
    return { __tag: 61, __name: "ERANGE", __data: [] };
  }
  __equals(other85428) {
    if (!other85428) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85428.__tag))) {
      return false;
    }
    return true;
  }
}

class EROFS_0 {
  constructor() {
    this.__tag = 62;
  }
  __reflect() {
    return { __tag: 62, __name: "EROFS", __data: [] };
  }
  __equals(other85429) {
    if (!other85429) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85429.__tag))) {
      return false;
    }
    return true;
  }
}

class ESHUTDOWN_0 {
  constructor() {
    this.__tag = 63;
  }
  __reflect() {
    return { __tag: 63, __name: "ESHUTDOWN", __data: [] };
  }
  __equals(other85430) {
    if (!other85430) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85430.__tag))) {
      return false;
    }
    return true;
  }
}

class ESPIPE_0 {
  constructor() {
    this.__tag = 64;
  }
  __reflect() {
    return { __tag: 64, __name: "ESPIPE", __data: [] };
  }
  __equals(other85431) {
    if (!other85431) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85431.__tag))) {
      return false;
    }
    return true;
  }
}

class ESRCH_0 {
  constructor() {
    this.__tag = 65;
  }
  __reflect() {
    return { __tag: 65, __name: "ESRCH", __data: [] };
  }
  __equals(other85432) {
    if (!other85432) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85432.__tag))) {
      return false;
    }
    return true;
  }
}

class ETIMEDOUT_0 {
  constructor() {
    this.__tag = 66;
  }
  __reflect() {
    return { __tag: 66, __name: "ETIMEDOUT", __data: [] };
  }
  __equals(other85433) {
    if (!other85433) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85433.__tag))) {
      return false;
    }
    return true;
  }
}

class ETXTBSY_0 {
  constructor() {
    this.__tag = 67;
  }
  __reflect() {
    return { __tag: 67, __name: "ETXTBSY", __data: [] };
  }
  __equals(other85434) {
    if (!other85434) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85434.__tag))) {
      return false;
    }
    return true;
  }
}

class EXDEV_0 {
  constructor() {
    this.__tag = 68;
  }
  __reflect() {
    return { __tag: 68, __name: "EXDEV", __data: [] };
  }
  __equals(other85435) {
    if (!other85435) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85435.__tag))) {
      return false;
    }
    return true;
  }
}

class UNKNOWN_0 {
  constructor() {
    this.__tag = 69;
  }
  __reflect() {
    return { __tag: 69, __name: "UNKNOWN", __data: [] };
  }
  __equals(other85436) {
    if (!other85436) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85436.__tag))) {
      return false;
    }
    return true;
  }
}

class EOF_0 {
  constructor() {
    this.__tag = 70;
  }
  __reflect() {
    return { __tag: 70, __name: "EOF", __data: [] };
  }
  __equals(other85437) {
    if (!other85437) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85437.__tag))) {
      return false;
    }
    return true;
  }
}

class ENXIO_0 {
  constructor() {
    this.__tag = 71;
  }
  __reflect() {
    return { __tag: 71, __name: "ENXIO", __data: [] };
  }
  __equals(other85438) {
    if (!other85438) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85438.__tag))) {
      return false;
    }
    return true;
  }
}

class EMLINK_0 {
  constructor() {
    this.__tag = 72;
  }
  __reflect() {
    return { __tag: 72, __name: "EMLINK", __data: [] };
  }
  __equals(other85439) {
    if (!other85439) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85439.__tag))) {
      return false;
    }
    return true;
  }
}

class ENOTTY_0 {
  constructor() {
    this.__tag = 73;
  }
  __reflect() {
    return { __tag: 73, __name: "ENOTTY", __data: [] };
  }
  __equals(other85440) {
    if (!other85440) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85440.__tag))) {
      return false;
    }
    return true;
  }
}

class EFTYPE_0 {
  constructor() {
    this.__tag = 74;
  }
  __reflect() {
    return { __tag: 74, __name: "EFTYPE", __data: [] };
  }
  __equals(other85441) {
    if (!other85441) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85441.__tag))) {
      return false;
    }
    return true;
  }
}

class EILSEQ_0 {
  constructor() {
    this.__tag = 75;
  }
  __reflect() {
    return { __tag: 75, __name: "EILSEQ", __data: [] };
  }
  __equals(other85442) {
    if (!other85442) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85442.__tag))) {
      return false;
    }
    return true;
  }
}

class ESOCKTNOSUPPORT_0 {
  constructor() {
    this.__tag = 76;
  }
  __reflect() {
    return { __tag: 76, __name: "ESOCKTNOSUPPORT", __data: [] };
  }
  __equals(other85443) {
    if (!other85443) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85443.__tag))) {
      return false;
    }
    return true;
  }
}

class EUNATCH_0 {
  constructor() {
    this.__tag = 77;
  }
  __reflect() {
    return { __tag: 77, __name: "EUNATCH", __data: [] };
  }
  __equals(other85444) {
    if (!other85444) {
      return false;
    }
    if (!($effekt.equals(this.__tag, other85444.__tag))) {
      return false;
    }
    return true;
  }
}


// Common Runtime
// --------------
function Cell(init, region) {
  const cell = {
    value: init,
    backup: function() {
      const _backup = cell.value;
      // restore function (has a STRONG reference to `this`)
      return () => { cell.value = _backup; return cell }
    }
  }
  return cell;
}

const global = {
  fresh: Cell
}

function Arena(_region) {
  const region = _region;
  return {
    fresh: function(init) {
      const cell = Cell(init);
      // region keeps track what to backup, but we do not need to backup unreachable cells
      region.push(cell) // new WeakRef(cell))
      return cell;
    },
    region: _region,
    newRegion: function() {
      // a region aggregates weak references
      const nested = Arena([])
      // this doesn't work yet, since Arena.backup doesn't return a thunk
      region.push(nested) //new WeakRef(nested))
      return nested;
    },
    backup: function() {
      const _backup = []
      let nextIndex = 0;
      for (const ref of region) {
        const cell = ref //.deref()
        // only backup live cells
        if (cell) {
          _backup[nextIndex] = cell.backup()
          nextIndex++
        }
      }
      function restore() {
        const region = []
        let nextIndex = 0;
        for (const restoreCell of _backup) {
          region[nextIndex] = restoreCell() // new WeakRef(restoreCell())
          nextIndex++
        }
        return Arena(region)
      }
      return restore;
    }
  }
}


let _prompt = 1;

const TOPLEVEL_K = (x, ks) => { throw { computationIsDone: true, result: x } }
const TOPLEVEL_KS = { prompt: 0, arena: Arena([]), rest: null }

function THUNK(f) {
  f.thunk = true
  return f
}

function CAPTURE(body) {
  return (ks, k) => {
    const res = body(x => TRAMPOLINE(() => k(x, ks)))
    if (res instanceof Function) return res
    else throw { computationIsDone: true, result: $effekt.unit }
  }
}

const RETURN = (x, ks) => ks.rest.stack(x, ks.rest)

// const r = ks.arena.newRegion(); body
// const x = r.alloc(init); body

// HANDLE(ks, ks, (p, ks, k) => { STMT })
function RESET(prog, ks, k) {
  const prompt = _prompt++;
  const rest = { stack: k, prompt: ks.prompt, arena: ks.arena, rest: ks.rest }
  return prog(prompt, { prompt, arena: Arena([]), rest }, RETURN)
}

function DEALLOC(ks) {
  const arena = ks.arena
  if (!!arena) {
    arena.length = arena.length - 1
  }
}

function SHIFT(p, body, ks, k) {

  // TODO avoid constructing this object
  let meta = { stack: k, prompt: ks.prompt, arena: ks.arena, rest: ks.rest }
  let cont = null

  while (!!meta && meta.prompt !== p) {
    cont = { stack: meta.stack, prompt: meta.prompt, backup: meta.arena.backup(), rest: cont }
    meta = meta.rest
  }
  if (!meta) { throw `Prompt not found ${p}` }

  // package the prompt itself
  cont = { stack: meta.stack, prompt: meta.prompt, backup: meta.arena.backup(), rest: cont }
  meta = meta.rest

  const k1 = meta.stack
  meta.stack = null
  return body(cont, meta, k1)
}

// Rewind stack `cont` back onto `k` :: `ks` and resume with c
function RESUME(cont, c, ks, k) {
  let meta = { stack: k, prompt: ks.prompt, arena: ks.arena, rest: ks.rest }
  let toRewind = cont
  while (!!toRewind) {
    meta = { stack: toRewind.stack, prompt: toRewind.prompt, arena: toRewind.backup(), rest: meta }
    toRewind = toRewind.rest
  }

  const k1 = meta.stack // TODO instead copy meta here, like elsewhere?
  meta.stack = null
  return () => c(meta, k1)
}

function RUN_TOPLEVEL(comp) {
  try {
    let a = comp(TOPLEVEL_KS, TOPLEVEL_K)
    while (true) { a = a() }
  } catch (e) {
    if (e.computationIsDone) return e.result
    else throw e
  }
}

// trampolines the given computation (like RUN_TOPLEVEL, but doesn't provide continuations)
function TRAMPOLINE(comp) {
  let a = comp;
  try {
    while (true) {
      a = a()
    }
  } catch (e) {
    if (e.computationIsDone) return e.result
    else throw e
  }
}

// keeps the current trampoline going and dispatches the given task
function RUN(task) {
  return () => task(TOPLEVEL_KS, TOPLEVEL_K)
}

// aborts the current continuation
function ABORT(value) {
  throw { computationIsDone: true, result: value }
}


// "Public API" used in FFI
// ------------------------

/**
 * Captures the current continuation as a WHOLE and makes it available
 * as argument to the passed body. For example:
 *
 *   $effekt.capture(k => ... k(42) ...)
 *
 * The body
 *
 *   $effekt.capture(k => >>> ... <<<)
 *
 * conceptually runs on the _native_ JS call stack. You can call JS functions,
 * like `setTimeout` etc., but you are not expected or required to return an
 * Effekt value like `$effekt.unit`. If you want to run an Effekt computation
 * like in `io::spawn`, you can use `$effekt.run`.
 *
 * Advanced usage details:
 *
 * The value returned by the function passed to `capture` returns
 * - a function: the returned function will be passed to the
 *   Effekt runtime, which performs trampolining.
 *   In this case, the Effekt runtime will keep running, though the
 *   continuation has been removed.
 *
 * - another value (like `undefined`): the Effekt runtime will terminate.
 */
$effekt.capture = CAPTURE

/**
 * Used to call Effekt function arguments in the JS FFI, like in `io::spawn`.
 *
 * Requires an active Effekt runtime (trampoline).
 */
$effekt.run = RUN

/**
 * Used to call Effekt function arguments in the JS FFI, like in `network::listen`.
 *
 * This function should be used when _no_ Effekt runtime is available. For instance,
 * in callbacks passed to the NodeJS eventloop.
 *
 * If a runtime is available, use `$effekt.run`, instead.
 */
$effekt.runToplevel = RUN_TOPLEVEL


$effekt.show = function(obj) {
  if (!!obj && !!obj.__reflect) {
    const meta = obj.__reflect()
    return meta.__name + "(" + meta.__data.map($effekt.show).join(", ") + ")"
  }
  else if (!!obj && obj.__unit) {
    return "()";
  } else {
    return "" + obj;
  }
}

$effekt.equals = function(obj1, obj2) {
  if (!!obj1.__equals) {
    return obj1.__equals(obj2)
  } else {
    return (obj1.__unit && obj2.__unit) || (obj1 === obj2);
  }
}

function compare$prim(n1, n2) {
  if (n1 == n2) { return 0; }
  else if (n1 > n2) { return 1; }
  else { return -1; }
}

$effekt.compare = function(obj1, obj2) {
  if ($effekt.equals(obj1, obj2)) { return 0; }

  if (!!obj1 && !!obj2) {
    if (!!obj1.__reflect && !!obj2.__reflect) {
      const tagOrdering = compare$prim(obj1.__tag, obj2.__tag)
      if (tagOrdering != 0) { return tagOrdering; }

      const meta1 = obj1.__reflect().__data
      const meta2 = obj2.__reflect().__data

      const lengthOrdering = compare$prim(meta1.length, meta2.length)
      if (lengthOrdering != 0) { return lengthOrdering; }

      for (let i = 0; i < meta1.length; i++) {
        const contentOrdering = $effekt.compare(meta1[i], meta2[i])
        if (contentOrdering != 0) { return contentOrdering; }
      }

      return 0;
    }
  }

  return compare$prim(obj1, obj2);
}

$effekt.println = function println$impl(str) {
  console.log(str); return $effekt.unit;
}

$effekt.unit = { __unit: true }

$effekt.emptyMatch = function() { throw "empty match" }

$effekt.hole = function() { throw "not implemented, yet" }


  function array$set(arr, index, value) {
    arr[index] = value;
    return $effekt.unit
  }



  function set$impl(ref, value) {
    ref.value = value;
    return $effekt.unit;
  }



    function promise$make() {
      let resolve;
      const promise = new Promise((res, rej) => {
        resolve = res;
      });
      return { resolve: resolve, promise: promise };
    }
  


    const readline = require('node:readline');
  


  function bytearray$set(bytes, index, value) {
    bytes[index] = value;
    return $effekt.unit;
  }

  function bytearray$compare(arr1, arr2) {
    const len = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < len; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] < arr2[i] ? -1 : 1;
      }
    }

    if (arr1.length !== arr2.length) {
      return arr1.length < arr2.length ? -1 : 1;
    } else {
      return 0;
    }
  }



    const os = require('node:os');

    /**
     * Maps the error code to a Effekt-stable (platform independent) numeric value.
     *
     * Tries to use most common errno integer values, but introduces fresh values (> 200)
     * for those without common errno values.
     */
    function errorNumber(errno) {
      const errnoMap = {
        [os.constants.errno.EPERM]: 1,
        [os.constants.errno.ENOENT]: 2,
        [os.constants.errno.ESRCH]: 3,
        [os.constants.errno.EINTR]: 4,
        [os.constants.errno.EIO]: 5,
        [os.constants.errno.ENXIO]: 6,
        [os.constants.errno.E2BIG]: 7,
        [os.constants.errno.EBADF]: 9,
        [os.constants.errno.EAGAIN]: 11,
        [os.constants.errno.ENOMEM]: 12,
        [os.constants.errno.EACCES]: 13,
        [os.constants.errno.EFAULT]: 14,
        [os.constants.errno.EBUSY]: 16,
        [os.constants.errno.EEXIST]: 17,
        [os.constants.errno.EXDEV]: 18,
        [os.constants.errno.ENODEV]: 19,
        [os.constants.errno.ENOTDIR]: 20,
        [os.constants.errno.EISDIR]: 21,
        [os.constants.errno.EINVAL]: 22,
        [os.constants.errno.ENFILE]: 23,
        [os.constants.errno.EMFILE]: 24,
        [os.constants.errno.ENOTTY]: 25,
        [os.constants.errno.ETXTBSY]: 26,
        [os.constants.errno.EFBIG]: 27,
        [os.constants.errno.ENOSPC]: 28,
        [os.constants.errno.ESPIPE]: 29,
        [os.constants.errno.EROFS]: 30,
        [os.constants.errno.EMLINK]: 31,
        [os.constants.errno.EPIPE]: 32,
        [os.constants.errno.ERANGE]: 34,
        [os.constants.errno.ENAMETOOLONG]: 36,
        [os.constants.errno.ELOOP]: 40,
        [os.constants.errno.EOVERFLOW]: 75,
        [os.constants.errno.EFTYPE]: 79,
        [os.constants.errno.EILSEQ]: 84,
        [os.constants.errno.ENOTSOCK]: 88,
        [os.constants.errno.EDESTADDRREQ]: 89,
        [os.constants.errno.EMSGSIZE]: 90,
        [os.constants.errno.EPROTOTYPE]: 91,
        [os.constants.errno.ENOPROTOOPT]: 92,
        [os.constants.errno.EPROTONOSUPPORT]: 93,
        [os.constants.errno.ESOCKTNOSUPPORT]: 94,
        [os.constants.errno.ENOTSUP]: 95,
        [os.constants.errno.EAFNOSUPPORT]: 97,
        [os.constants.errno.EADDRINUSE]: 98,
        [os.constants.errno.EADDRNOTAVAIL]: 99,
        [os.constants.errno.ENETDOWN]: 100,
        [os.constants.errno.ENETUNREACH]: 101,
        [os.constants.errno.ECONNABORTED]: 103,
        [os.constants.errno.ECONNRESET]: 104,
        [os.constants.errno.ENOBUFS]: 105,
        [os.constants.errno.EISCONN]: 106,
        [os.constants.errno.ENOTCONN]: 107,
        [os.constants.errno.ETIMEDOUT]: 110,
        [os.constants.errno.ECONNREFUSED]: 111,
        [os.constants.errno.EHOSTUNREACH]: 113,
        [os.constants.errno.EALREADY]: 114,
        [os.constants.errno.ECANCELED]: 125,
        [os.constants.errno.EAI_ADDRFAMILY]: 200,
        [os.constants.errno.EAI_AGAIN]: 201,
        [os.constants.errno.EAI_BADFLAGS]: 202,
        [os.constants.errno.EAI_BADHINTS]: 203,
        [os.constants.errno.EAI_CANCELED]: 204,
        [os.constants.errno.EAI_FAIL]: 205,
        [os.constants.errno.EAI_FAMILY]: 206,
        [os.constants.errno.EAI_MEMORY]: 207,
        [os.constants.errno.EAI_NODATA]: 208,
        [os.constants.errno.EAI_NONAME]: 209,
        [os.constants.errno.EAI_OVERFLOW]: 210,
        [os.constants.errno.EAI_PROTOCOL]: 211,
        [os.constants.errno.EAI_SERVICE]: 212,
        [os.constants.errno.EAI_SOCKTYPE]: 213,
        [os.constants.errno.ECHARSET]: 215,
        [os.constants.errno.ENONET]: 216,
        [os.constants.errno.UNKNOWN]: 217,
        [os.constants.errno.EOF]: 218,
        [os.constants.errno.EUNATCH]: 219,
        [os.constants.errno.ESHUTDOWN]: 220
      };
      return errnoMap[-errno] || -1; // Default to -1 for unknown error names
    }
  


    /**
     * Nodejs file operations expect buffers, but we represent buffers as typed arrays.
     * This function converts between the two without copying.
     */
    function toBuffer(buffer) {
      return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength)
    }
  


    const fs = require("fs");

    function open(path, flags, callback) {
      fs.open(path, flags, (err, file) => {
        if (err) { callback(err.errno) } else { callback(file) }
      })
    }

    function read(file, buffer, offset, size, position, callback) {
      let positionOrNull = position === -1 ? null : position;
      fs.read(file, toBuffer(buffer), offset, size, positionOrNull, (err, bytesRead) => {
        if (err) { callback(err.errno) } else { callback(bytesRead) }
      })
    }

    function write(file, buffer, offset, size, position, callback) {
      let positionOrNull = position === -1 ? null : position;
      fs.write(file, toBuffer(buffer), offset, size, positionOrNull, (err, bytesWritten) => {
        if (err) { callback(err.errno) } else { callback(bytesWritten) }
      })
    }

    function close(file, callback) {
      fs.close(file, (err) => {
        if (err) { callback(err.errno) } else { callback(0) }
      })
    }

    function mkdir(path, callback) {
      fs.mkdir(path, (err) => {
        if (err) { callback(err.errno) } else { callback(0) }
      })
    }
  

function openForReading_0(path_0, ks_85327, k_85328) {
  return $effekt.capture(callback => open(path_0, 'r', callback))(ks_85327, k_85328);
}

function openForWriting_0(path_1, ks_85329, k_85330) {
  return $effekt.capture(callback => open(path_1, 'w', callback))(ks_85329, k_85330);
}

function read_0(file_0, buffer_0, offset_0, size_0, position_0, ks_85331, k_85332) {
  return $effekt.capture(callback => read(file_0, buffer_0, offset_0, size_0, position_0, callback))(ks_85331, k_85332);
}

function write_0(file_1, buffer_1, offset_1, size_1, position_1, ks_85333, k_85334) {
  return $effekt.capture(callback => write(file_1, buffer_1, offset_1, size_1, position_1, callback))(ks_85333, k_85334);
}

function close_0(file_2, ks_85335, k_85336) {
  return $effekt.capture(callback => close(file_2, callback))(ks_85335, k_85336);
}

const global_0 = global;

function map_0(l_1, f_0, ks_0, k_2) {
  const acc_0 = ks_0.arena.fresh(new Nil_0());
  function foreach_worker_0(l_0, ks_1, k_0) {
    switch (l_0.__tag) {
      case 0:  return () => k_0($effekt.unit, ks_1);
      case 1: 
        const head_8 = l_0.head_0;
        const tail_1 = l_0.tail_0;
        return f_0(head_8, ks_1, (v_r_0, ks_2) => {
          const s_0 = acc_0.value;
          acc_0.value = new Cons_0(v_r_0, s_0);
          return foreach_worker_0(tail_1, ks_2, k_0);
        });
    }
  }
  return foreach_worker_0(l_1, ks_0, (_0, ks_3) => {
    const s_1 = acc_0.value;
    const res_0 = ks_3.arena.fresh(new Nil_0());
    function foreach_worker_1(l_2, ks_4, k_1) {
      foreach_worker_2: while (true) {
        switch (l_2.__tag) {
          case 0:  return () => k_1($effekt.unit, ks_4);
          case 1: 
            const head_9 = l_2.head_0;
            const tail_2 = l_2.tail_0;
            const s_2 = res_0.value;
            res_0.value = new Cons_0(head_9, s_2);
            /* prepare call */
            l_2 = tail_2;
            continue foreach_worker_2;
        }
      }
    }
    return foreach_worker_1(s_1, ks_3, (_1, ks_5) => {
      const s_3 = res_0.value;
      DEALLOC(res_0);
      DEALLOC(acc_0);
      return () => k_2(s_3, ks_5);
    });
  });
}

function reverseOnto_0(l_3, other_0, ks_6, k_3) {
  reverseOnto_1: while (true) {
    switch (l_3.__tag) {
      case 0:  return () => k_3(other_0, ks_6);
      case 1: 
        const a_0 = l_3.head_0;
        const rest_0 = l_3.tail_0;
        /* prepare call */
        const tmp_other_0 = other_0;
        l_3 = rest_0;
        other_0 = new Cons_0(a_0, tmp_other_0);
        continue reverseOnto_1;
    }
  }
}

function take_0(l_4, n_0, ks_7, k_4) {
  take_1: while (true) {
    if ((n_0 <= (0))) {
      return () => k_4(new Nil_0(), ks_7);
    } else {
      switch (l_4.__tag) {
        case 0:  return () => k_4(new Nil_0(), ks_7);
        case 1: 
          const a_1 = l_4.head_0;
          const rest_1 = l_4.tail_0;
          /* prepare call */
          const tmp_n_0 = n_0;
          const tmp_k_0 = k_4;
          k_4 = (v_r_1, ks_8) =>
            () => tmp_k_0(new Cons_0(a_1, v_r_1), ks_8);
          l_4 = rest_1;
          n_0 = (tmp_n_0 - (1));
          continue take_1;
      }
    }
  }
}

function drop_0(l_5, n_1, ks_9, k_5) {
  drop_1: while (true) {
    if ((n_1 <= (0))) {
      return () => k_5(l_5, ks_9);
    } else {
      switch (l_5.__tag) {
        case 0:  return () => k_5(new Nil_0(), ks_9);
        case 1: 
          const rest_2 = l_5.tail_0;
          /* prepare call */
          const tmp_n_1 = n_1;
          l_5 = rest_2;
          n_1 = (tmp_n_1 - (1));
          continue drop_1;
      }
    }
  }
}

function substring_0(str_0, from_0, to_0, ks_10, k_6) {
  let v_r_2 = undefined;
  if ((from_0 < to_0)) {
    v_r_2 = from_0;
  } else {
    v_r_2 = to_0;
  }
  let lower_0 = undefined;
  if (((0) > v_r_2)) {
    lower_0 = 0;
  } else {
    lower_0 = v_r_2;
  }
  const tmp_0 = str_0.length;
  if ((to_0 < tmp_0)) if (((0) > to_0)) {
    return () => k_6(str_0.substring(lower_0, (0)), ks_10);
  } else {
    return () => k_6(str_0.substring(lower_0, to_0), ks_10);
  } else if (((0) > tmp_0)) {
    return () => k_6(str_0.substring(lower_0, (0)), ks_10);
  } else {
    return () => k_6(str_0.substring(lower_0, tmp_0), ks_10);
  }
}

function isSubstringAt_0(str_1, prefix_0, from_1, ks_17, k_12) {
  return RESET((p_0, ks_11, k_7) => {
    const Exception_0 = {
      raise_0: (exception_0, msg_0, ks_12, k_8) =>
        SHIFT(p_0, (k_9, ks_13, k_10) => () => k_10(false, ks_13), ks_12, undefined)
    };
    function go_0(index_0, ks_14, k_11) {
      if ((index_0 >= (prefix_0.length))) {
        return () => k_11(true, ks_14);
      } else {
        return charAt_0(prefix_0, index_0, Exception_0, ks_14, (v_r_3, ks_15) =>
          charAt_0(str_1, (index_0 + from_1), Exception_0, ks_15, (v_r_4, ks_16) => {
            if (v_r_3 === v_r_4) {
              return go_0((index_0 + (1)), ks_16, k_11);
            } else {
              return () => k_11(false, ks_16);
            }
          }));
      }
    }
    return go_0(0, ks_11, k_7);
  }, ks_17, k_12);
}

function split_0(str_2, sep_0, ks_30, k_18) {
  const tmp_1 = str_2.length;
  const tmp_2 = sep_0.length;
  function empty_0(index_1, components_0, ks_18, k_14) {
    if ((index_1 >= tmp_1)) {
      const res_1 = ks_18.arena.fresh(new Nil_0());
      function foreach_worker_3(l_6, ks_19, k_13) {
        foreach_worker_4: while (true) {
          switch (l_6.__tag) {
            case 0:  return () => k_13($effekt.unit, ks_19);
            case 1: 
              const head_10 = l_6.head_0;
              const tail_3 = l_6.tail_0;
              const s_4 = res_1.value;
              res_1.value = new Cons_0(head_10, s_4);
              /* prepare call */
              l_6 = tail_3;
              continue foreach_worker_4;
          }
        }
      }
      return foreach_worker_3(components_0, ks_18, (_2, ks_20) => {
        const s_5 = res_1.value;
        DEALLOC(res_1);
        return () => k_14(s_5, ks_20);
      });
    } else {
      return substring_0(str_2, index_1, (index_1 + (1)), ks_18, (v_r_5, ks_21) =>
        empty_0((index_1 + (1)), new Cons_0(v_r_5, components_0), ks_21, k_14));
    }
  }
  function go_1(lastIndex_0, components_1, ks_24, k_17) {
    function go_2(index_2, ks_22, k_15) {
      if ((index_2 >= (str_2.length))) {
        return () => k_15(new None_0(), ks_22);
      } else {
        return isSubstringAt_0(str_2, sep_0, index_2, ks_22, (v_r_6, ks_23) => {
          if (v_r_6) {
            return () => k_15(new Some_0(index_2), ks_23);
          } else {
            return go_2((index_2 + (1)), ks_23, k_15);
          }
        });
      }
    }
    return go_2(lastIndex_0, ks_24, (v_r_7, ks_25) => {
      switch (v_r_7.__tag) {
        case 0: 
          return substring_0(str_2, lastIndex_0, tmp_1, ks_25, (v_r_8, ks_26) => {
            const res_2 = ks_26.arena.fresh(new Nil_0());
            function foreach_worker_5(l_7, ks_27, k_16) {
              foreach_worker_6: while (true) {
                switch (l_7.__tag) {
                  case 0:  return () => k_16($effekt.unit, ks_27);
                  case 1: 
                    const head_11 = l_7.head_0;
                    const tail_4 = l_7.tail_0;
                    const s_6 = res_2.value;
                    res_2.value = new Cons_0(head_11, s_6);
                    /* prepare call */
                    l_7 = tail_4;
                    continue foreach_worker_6;
                }
              }
            }
            return foreach_worker_5(new Cons_0(v_r_8, components_1), ks_26, (_3, ks_28) => {
              const s_7 = res_2.value;
              DEALLOC(res_2);
              return () => k_17(s_7, ks_28);
            });
          });
        case 1: 
          const index_3 = v_r_7.value_0;
          return substring_0(str_2, lastIndex_0, index_3, ks_25, (v_r_9, ks_29) =>
            go_1((index_3 + tmp_2), new Cons_0(v_r_9, components_1), ks_29, k_17));
      }
    });
  }
  if (tmp_2 === (0)) {
    return empty_0(0, new Nil_0(), ks_30, k_18);
  } else {
    return go_1(0, new Nil_0(), ks_30, k_18);
  }
}

function charAt_0(str_3, index_4, Exception_1, ks_31, k_19) {
  if ((index_4 < (0))) {
    return Exception_1.raise_0(new OutOfBounds_0(), ((((((((((("Index out of bounds: ") + (('' + index_4))))) + (" in string: '")))) + (str_3)))) + ("'")), ks_31, undefined);
  } else if ((index_4 >= (str_3.length))) {
    return Exception_1.raise_0(new OutOfBounds_0(), ((((((((((("Index out of bounds: ") + (('' + index_4))))) + (" in string: '")))) + (str_3)))) + ("'")), ks_31, undefined);
  } else {
    return () => k_19(str_3.codePointAt(index_4), ks_31);
  }
}

function showSentence_0(l_8, ks_32, k_21) {
  const output_0 = ks_32.arena.fresh("");
  function loop_0(index_5, remainder_0, ks_33, k_20) {
    loop_1: while (true) {
      switch (remainder_0.__tag) {
        case 0:  return () => k_20($effekt.unit, ks_33);
        case 1: 
          const head_12 = remainder_0.head_0;
          const tail_5 = remainder_0.tail_0;
          if (index_5 === (0)) {
            output_0.value = head_12;
            /* prepare call */
            const tmp_index_0 = index_5;
            index_5 = (tmp_index_0 + (1));
            remainder_0 = tail_5;
            continue loop_1;
          } else {
            const s_8 = output_0.value;
            output_0.value = (((((s_8) + (" ")))) + (head_12));
            /* prepare call */
            const tmp_index_1 = index_5;
            index_5 = (tmp_index_1 + (1));
            remainder_0 = tail_5;
            continue loop_1;
          }
          break;
      }
    }
  }
  return loop_0(0, l_8, ks_32, (_4, ks_34) => {
    const s_9 = output_0.value;
    DEALLOC(output_0);
    return () => k_21(s_9, ks_34);
  });
}

function flatten_0(l_9, f_1, ks_35, k_23) {
  const output_1 = ks_35.arena.fresh("");
  function loop_2(index_6, remainder_1, ks_36, k_22) {
    loop_3: while (true) {
      switch (remainder_1.__tag) {
        case 0:  return () => k_22($effekt.unit, ks_36);
        case 1: 
          const head_13 = remainder_1.head_0;
          const tail_6 = remainder_1.tail_0;
          if (index_6 !== (0)) {
            const s_10 = output_1.value;
            return f_1(s_10, head_13, ks_36, (v_r_10, ks_37) => {
              output_1.value = v_r_10;
              return loop_2((index_6 + (1)), tail_6, ks_37, k_22);
            });
          } else {
            output_1.value = head_13;
            /* prepare call */
            const tmp_index_2 = index_6;
            index_6 = (tmp_index_2 + (1));
            remainder_1 = tail_6;
            continue loop_3;
          }
          break;
      }
    }
  }
  return loop_2(0, l_9, ks_35, (_5, ks_38) => {
    const s_11 = output_1.value;
    DEALLOC(output_1);
    return () => k_23(s_11, ks_38);
  });
}

function getIndexOf_0(l_10, v_0, ks_45, k_29) {
  return RESET((p_1, ks_39, k_24) => {
    const found_0 = ks_39.arena.fresh(false);
    const index_7 = ks_39.arena.fresh(-1);
    function b_while_0(ks_42, k_28) {
      const s_12 = found_0.value;
      if (s_12 === (false)) {
        const s_13 = index_7.value;
        index_7.value = (s_13 + (1));
        const s_14 = index_7.value;
        function go_3(list_0, i_0, ks_41, k_27) {
          go_4: while (true) {
            switch (list_0.__tag) {
              case 0: 
                return SHIFT(p_1, (k_25, ks_40, k_26) =>
                  () => k_26(new None_0(), ks_40), ks_41, undefined);
              case 1: 
                const x_0 = list_0.head_0;
                const xs_0 = list_0.tail_0;
                if (i_0 === (0)) {
                  return () => k_27(x_0, ks_41);
                } else {
                  /* prepare call */
                  const tmp_i_0 = i_0;
                  list_0 = xs_0;
                  i_0 = (tmp_i_0 - (1));
                  continue go_4;
                }
                break;
            }
          }
        }
        return go_3(l_10, s_14, ks_42, (v_r_11, ks_43) => {
          if (v_r_11 === v_0) {
            found_0.value = true;
            return b_while_0(ks_43, k_28);
          } else {
            return b_while_0(ks_43, k_28);
          }
        });
      } else {
        return () => k_28($effekt.unit, ks_42);
      }
    }
    return b_while_0(ks_39, (_6, ks_44) => {
      const s_15 = index_7.value;
      DEALLOC(index_7);
      DEALLOC(found_0);
      return () => k_24(new Some_0(s_15), ks_44);
    });
  }, ks_45, k_29);
}

function getIndexOf_1(l_11, vs_0, ks_54, k_36) {
  return RESET((p_2, ks_46, k_30) => {
    const found_1 = ks_46.arena.fresh(false);
    const index_8 = ks_46.arena.fresh(-1);
    function b_while_1(ks_51, k_35) {
      const s_16 = found_1.value;
      if (s_16 === (false)) {
        const s_17 = index_8.value;
        index_8.value = (s_17 + (1));
        function any_worker_0(list_1, ks_49, k_34) {
          switch (list_1.__tag) {
            case 1: 
              const x_1 = list_1.head_0;
              const xs_1 = list_1.tail_0;
              const s_18 = index_8.value;
              function go_5(list_2, i_1, ks_48, k_33) {
                go_6: while (true) {
                  switch (list_2.__tag) {
                    case 0: 
                      return SHIFT(p_2, (k_31, ks_47, k_32) =>
                        () => k_32(new None_0(), ks_47), ks_48, undefined);
                    case 1: 
                      const x_2 = list_2.head_0;
                      const xs_2 = list_2.tail_0;
                      if (i_1 === (0)) {
                        return () => k_33(x_2, ks_48);
                      } else {
                        /* prepare call */
                        const tmp_i_1 = i_1;
                        list_2 = xs_2;
                        i_1 = (tmp_i_1 - (1));
                        continue go_6;
                      }
                      break;
                  }
                }
              }
              return go_5(l_11, s_18, ks_49, (v_r_12, ks_50) => {
                if (x_1 === v_r_12) {
                  return () => k_34(true, ks_50);
                } else {
                  return any_worker_0(xs_1, ks_50, k_34);
                }
              });
            case 0:  return () => k_34(false, ks_49);
          }
        }
        return any_worker_0(vs_0, ks_51, (v_r_13, ks_52) => {
          if (v_r_13) {
            found_1.value = true;
            return b_while_1(ks_52, k_35);
          } else {
            return b_while_1(ks_52, k_35);
          }
        });
      } else {
        return () => k_35($effekt.unit, ks_51);
      }
    }
    return b_while_1(ks_46, (_7, ks_53) => {
      const s_19 = index_8.value;
      DEALLOC(index_8);
      DEALLOC(found_1);
      return () => k_30(new Some_0(s_19), ks_53);
    });
  }, ks_54, k_36);
}

function createModifiers_0(words_0, ks_55, k_38) {
  const n_2 = ks_55.arena.fresh(0);
  function foreach_worker_7(l_12, ks_56, k_37) {
    foreach_worker_8: while (true) {
      switch (l_12.__tag) {
        case 0:  return () => k_37($effekt.unit, ks_56);
        case 1: 
          const tail_7 = l_12.tail_0;
          const s_20 = n_2.value;
          n_2.value = (s_20 + (1));
          /* prepare call */
          l_12 = tail_7;
          continue foreach_worker_8;
      }
    }
  }
  return foreach_worker_7(words_0, ks_55, (_8, ks_57) => {
    const s_21 = n_2.value;
    if (s_21 === (0)) {
      DEALLOC(n_2);
      return () => k_38(new Nil_0(), ks_57);
    } else {
      return RESET((p_3, ks_58, k_39) => {
        const done_0 = ks_58.arena.fresh(false);
        const index_9 = ks_58.arena.fresh(-1);
        const indexes_0 = ks_58.arena.fresh(new Nil_0());
        function b_while_2(ks_61, k_47) {
          const s_22 = done_0.value;
          if (s_22 === (false)) {
            const s_23 = index_9.value;
            index_9.value = (s_23 + (1));
            const s_24 = index_9.value;
            function go_7(list_3, i_2, ks_60, k_42) {
              go_8: while (true) {
                switch (list_3.__tag) {
                  case 0: 
                    return SHIFT(p_3, (k_40, ks_59, k_41) => {
                      const tmp_3 = $effekt.println("Trying to get an element outside the bounds of a list");
                      return () => k_41(new Nil_0(), ks_59);
                    }, ks_60, undefined);
                  case 1: 
                    const x_3 = list_3.head_0;
                    const xs_3 = list_3.tail_0;
                    if (i_2 === (0)) {
                      return () => k_42(x_3, ks_60);
                    } else {
                      /* prepare call */
                      const tmp_i_2 = i_2;
                      list_3 = xs_3;
                      i_2 = (tmp_i_2 - (1));
                      continue go_8;
                    }
                    break;
                }
              }
            }
            return go_7(words_0, s_24, ks_61, (v_r_14, ks_62) => {
              function l_13(_10, ks_63, k_44) {
                const s_25 = index_9.value;
                const n_3 = ks_63.arena.fresh(0);
                function foreach_worker_9(l_14, ks_64, k_43) {
                  foreach_worker_10: while (true) {
                    switch (l_14.__tag) {
                      case 0:  return () => k_43($effekt.unit, ks_64);
                      case 1: 
                        const tail_8 = l_14.tail_0;
                        const s_26 = n_3.value;
                        n_3.value = (s_26 + (1));
                        /* prepare call */
                        l_14 = tail_8;
                        continue foreach_worker_10;
                    }
                  }
                }
                return foreach_worker_9(words_0, ks_63, (_9, ks_65) => {
                  const s_27 = n_3.value;
                  if (s_25 === ((s_27 - (1)))) {
                    done_0.value = true;
                    return b_while_2(ks_65, (tmp_4, ks_66) => {
                      DEALLOC(n_3);
                      return () => k_44(tmp_4, ks_66);
                    });
                  } else {
                    return b_while_2(ks_65, (tmp_4, ks_67) => {
                      DEALLOC(n_3);
                      return () => k_44(tmp_4, ks_67);
                    });
                  }
                });
              }
              if (v_r_14 === "pi") {
                const s_28 = indexes_0.value;
                const s_29 = indexes_0.value;
                const n_4 = ks_62.arena.fresh(0);
                function foreach_worker_11(l_15, ks_68, k_45) {
                  foreach_worker_12: while (true) {
                    switch (l_15.__tag) {
                      case 0:  return () => k_45($effekt.unit, ks_68);
                      case 1: 
                        const tail_9 = l_15.tail_0;
                        const s_30 = n_4.value;
                        n_4.value = (s_30 + (1));
                        /* prepare call */
                        l_15 = tail_9;
                        continue foreach_worker_12;
                    }
                  }
                }
                return foreach_worker_11(s_29, ks_62, (_11, ks_69) => {
                  const s_31 = n_4.value;
                  const s_32 = index_9.value;
                  return take_0(s_28, s_31, ks_69, (v_r_15, ks_70) =>
                    drop_0(s_28, s_31, ks_70, (v_r_16, ks_71) => {
                      const res_3 = ks_71.arena.fresh(new Nil_0());
                      function foreach_worker_13(l_16, ks_72, k_46) {
                        foreach_worker_14: while (true) {
                          switch (l_16.__tag) {
                            case 0: 
                              return () => k_46($effekt.unit, ks_72);
                            case 1: 
                              const head_14 = l_16.head_0;
                              const tail_10 = l_16.tail_0;
                              const s_33 = res_3.value;
                              res_3.value = new Cons_0(head_14, s_33);
                              /* prepare call */
                              l_16 = tail_10;
                              continue foreach_worker_14;
                          }
                        }
                      }
                      return foreach_worker_13(v_r_15, ks_71, (_12, ks_73) => {
                        const s_34 = res_3.value;
                        return reverseOnto_0(s_34, new Cons_0(s_32, v_r_16), ks_73, (v_r_17, ks_74) => {
                          indexes_0.value = v_r_17;
                          return l_13($effekt.unit, ks_74, (tmp_5, ks_75) => {
                            DEALLOC(res_3);
                            DEALLOC(n_4);
                            return () => k_47(tmp_5, ks_75);
                          });
                        });
                      });
                    }));
                });
              } else {
                return l_13($effekt.unit, ks_62, k_47);
              }
            });
          } else {
            return () => k_47($effekt.unit, ks_61);
          }
        }
        return b_while_2(ks_58, (_13, ks_76) => {
          const s_35 = indexes_0.value;
          DEALLOC(indexes_0);
          DEALLOC(index_9);
          DEALLOC(done_0);
          return () => k_39(s_35, ks_76);
        });
      }, ks_57, (v_r_18, ks_77) => {
        switch (v_r_18.__tag) {
          case 1: 
            const head_15 = v_r_18.head_0;
            const tail_11 = v_r_18.tail_0;
            if (head_15 === (0)) {
              switch (tail_11.__tag) {
                case 1: 
                  const index_10 = tail_11.head_0;
                  return drop_0(words_0, 1, ks_77, (v_r_19, ks_78) =>
                    take_0(v_r_19, 1, ks_78, (v_r_20, ks_79) =>
                      drop_0(words_0, 2, ks_79, (prefix_1, ks_80) =>
                        take_0(prefix_1, (index_10 - (2)), ks_80, (v_r_21, ks_81) =>
                          drop_0(words_0, index_10, ks_81, (v_r_22, ks_82) =>
                            createModifiers_0(v_r_22, ks_82, (v_r_23, ks_83) => {
                              DEALLOC(n_2);
                              return () =>
                                k_38(new Cons_0(new ModifierLeaf_0(v_r_20, v_r_21), v_r_23), ks_83);
                            }))))));
                default: 
                  return drop_0(words_0, 1, ks_77, (v_r_24, ks_84) =>
                    take_0(v_r_24, 1, ks_84, (v_r_25, ks_85) =>
                      drop_0(words_0, 2, ks_85, (v_r_26, ks_86) => {
                        DEALLOC(n_2);
                        return () =>
                          k_38(new Cons_0(new ModifierLeaf_0(v_r_25, v_r_26), new Nil_0()), ks_86);
                      })));
              }
            } else {
              return take_0(words_0, 1, ks_77, (v_r_27, ks_87) =>
                drop_0(words_0, 1, ks_87, (v_r_28, ks_88) =>
                  createModifiers_0(v_r_28, ks_88, (v_r_29, ks_89) => {
                    DEALLOC(n_2);
                    return () =>
                      k_38(new Cons_0(new ModifierLeaf_0(v_r_27, new Nil_0()), v_r_29), ks_89);
                  })));
            }
            break;
          default: 
            return take_0(words_0, 1, ks_77, (v_r_30, ks_90) =>
              drop_0(words_0, 1, ks_90, (v_r_31, ks_91) =>
                createModifiers_0(v_r_31, ks_91, (v_r_32, ks_92) => {
                  DEALLOC(n_2);
                  return () =>
                    k_38(new Cons_0(new ModifierLeaf_0(v_r_30, new Nil_0()), v_r_32), ks_92);
                })));
        }
      });
    }
  });
}

function formPlural_0(word_0, ks_93, k_49) {
  return isSubstringAt_0(word_0, "s", ((word_0.length) - ("s".length)), ks_93, (v_r_33, ks_94) => {
    function k_48(v_r_34, ks_95) {
      if (v_r_34) {
        return () => k_49(((word_0) + ("es")), ks_95);
      } else {
        return () => k_49(((word_0) + ("s")), ks_95);
      }
    }
    if (v_r_33) {
      return () => k_48(true, ks_94);
    } else {
      return isSubstringAt_0(word_0, "ch", ((word_0.length) - ("ch".length)), ks_94, k_48);
    }
  });
}

function regularNoun_0(word_1, ambiguity_0, setSubjectPerson_0, ks_96, k_50) {
  return formPlural_0(word_1, ks_96, (pluralWord_0, ks_97) =>
    ambiguity_0.ambiguity_1(new Cons_0(new Tuple_0(word_1, new Plural_0()), new Cons_0(new Tuple_0(pluralWord_0, new Singular_0()), new Nil_0())), ks_97, (output_2, ks_98) => {
      if (!(output_2 === word_1)) {
        return setSubjectPerson_0.setSubjectPerson_1(new NotThird_0(), ks_98, (_14, ks_99) =>
          () => k_50(output_2, ks_99));
      } else {
        return () => k_50(output_2, ks_98);
      }
    }));
}

function regularVerb_0(word_2, thirdPerson_0, ambiguity_2, setSubjectPerson_2, ks_102, k_51) {
  function b_els_0(ks_100) {
    return isSubstringAt_0(word_2, "sh", ((word_2.length) - ("sh".length)), ks_100, (v_r_35, ks_101) => {
      if (v_r_35) if (thirdPerson_0) {
        return () => k_51(((word_2) + ("es")), ks_101);
      } else if (thirdPerson_0) {
        return () => k_51(((word_2) + ("s")), ks_101);
      } else {
        return () => k_51(word_2, ks_101);
      } else if (thirdPerson_0) {
        return () => k_51(((word_2) + ("s")), ks_101);
      } else {
        return () => k_51(word_2, ks_101);
      }
    });
  }
  return isSubstringAt_0(word_2, "y", ((word_2.length) - ("y".length)), ks_102, (v_r_36, ks_103) => {
    if (v_r_36) if (thirdPerson_0) {
      return substring_0(word_2, 0, ((word_2.length) - (1)), ks_103, (v_r_37, ks_104) =>
        () => k_51(((v_r_37) + ("ies")), ks_104));
    } else {
      return () => b_els_0(ks_103);
    } else {
      return () => b_els_0(ks_103);
    }
  });
}

function verbTwoMeanings_0(word_3, word_4, thirdPerson_1, ambiguity_3, setSubjectPerson_3, ks_105, k_52) {
  return ambiguity_3.ambiguity_1(new Cons_0(new Tuple_0(word_3, new FirstMeaning_0()), new Cons_0(new Tuple_0(word_4, new SecondMeaning_0()), new Nil_0())), ks_105, (output_3, ks_106) =>
    isSubstringAt_0(output_3, "y", ((output_3.length) - ("y".length)), ks_106, (v_r_38, ks_107) => {
      if (v_r_38) if (thirdPerson_1) {
        return substring_0(output_3, 0, ((output_3.length) - (1)), ks_107, (v_r_39, ks_108) =>
          () => k_52(((v_r_39) + ("ies")), ks_108));
      } else if (thirdPerson_1) {
        return () => k_52(((output_3) + ("s")), ks_107);
      } else {
        return () => k_52(output_3, ks_107);
      } else if (thirdPerson_1) {
        return () => k_52(((output_3) + ("s")), ks_107);
      } else {
        return () => k_52(output_3, ks_107);
      }
    }));
}

function objectTwoMeaningsPlural_0(word_5, word_6, ambiguity_4, setSubjectPerson_4, ks_109, k_53) {
  return ambiguity_4.ambiguity_1(new Cons_0(new Tuple_0(word_5, new FirstMeaning_0()), new Cons_0(new Tuple_0(word_6, new SecondMeaning_0()), new Nil_0())), ks_109, (v_r_40, ks_110) => {
    const output_4 = ks_110.arena.fresh(v_r_40);
    const s_36 = output_4.value;
    return formPlural_0(s_36, ks_110, (pluralWord_1, ks_111) =>
      ambiguity_4.ambiguity_1(new Cons_0(new Tuple_0(s_36, new Plural_0()), new Cons_0(new Tuple_0(pluralWord_1, new Singular_0()), new Nil_0())), ks_111, (v_r_41, ks_112) => {
        output_4.value = v_r_41;
        const s_37 = output_4.value;
        DEALLOC(output_4);
        return () => k_53(s_37, ks_112);
      }));
  });
}

function translateWord_0(word_7, context_1, thirdPerson_2, negate_0, ambiguity_5, negateNext_0, setSubjectPerson_5, ks_113, k_59) {
  const newThirdPerson_0 = ks_113.arena.fresh(thirdPerson_2);
  function l_17(_25, ks_209, k_58) {
    return RESET((p_4, ks_114, k_54) => {
      const wrongContext_0 = {
        wrongContext_1: (msg_1, context_0, ks_115, k_55) =>
          SHIFT(p_4, (k_56, ks_116, k_57) => {
            switch (context_0.__tag) {
              case 2: 
                const tmp_6 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Verb"))));
                return () => k_57("", ks_116);
              case 0: 
                const tmp_7 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Subject"))));
                return () => k_57("", ks_116);
              case 1: 
                const tmp_8 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Object"))));
                return () => k_57("", ks_116);
              case 3: 
                const tmp_9 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Preposition"))));
                return () => k_57("", ks_116);
              case 4: 
                const tmp_10 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Preverb"))));
                return () => k_57("", ks_116);
              case 5: 
                const tmp_11 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Adverb"))));
                return () => k_57("", ks_116);
              case 6: 
                const tmp_12 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Adjective"))));
                return () => k_57("", ks_116);
              case 7: 
                const tmp_13 = $effekt.println(((((((((("WRONG CONTEXT: ") + (msg_1)))) + (" Context: ")))) + ("Nothing"))));
                return () => k_57("", ks_116);
            }
          }, ks_115, undefined)
      };
      if (word_7 === "mi") {
        switch (context_1.__tag) {
          case 0: 
            if (negate_0) {
              return negateNext_0.negateNext_1(false, ks_114, (_15, ks_117) =>
                () => k_54("me", ks_117));
            } else {
              return setSubjectPerson_5.setSubjectPerson_1(new First_0(), ks_114, (_16, ks_118) =>
                () => k_54("I", ks_118));
            }
            break;
          case 1:  return () => k_54("me", ks_114);
          case 6:  return () => k_54("my", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ona") {
        switch (context_1.__tag) {
          case 0: 
            return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_114, (_17, ks_119) => {
              if (negate_0) {
                return negateNext_0.negateNext_1(false, ks_119, (_18, ks_120) =>
                  () => k_54("them", ks_120));
              } else {
                return () => k_54("they", ks_119);
              }
            });
          case 1:  return () => k_54("they", ks_114);
          case 6:  return () => k_54("their", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ona", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sina") {
        switch (context_1.__tag) {
          case 0: 
            return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_114, (_19, ks_121) =>
              () => k_54("you", ks_121));
          case 1:  return () => k_54("you", ks_114);
          case 6:  return () => k_54("your", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sina", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ala") {
        return negateNext_0.negateNext_1(true, ks_114, (_20, ks_122) => {
          switch (context_1.__tag) {
            case 3:  return () => k_54("not", ks_122);
            case 0: 
              return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_122, (_21, ks_123) =>
                () => k_54("nothing", ks_123));
            case 1:  return () => k_54("nothing", ks_122);
            case 4:  return () => k_54("dont", ks_122);
            case 6:  return () => k_54("not", ks_122);
            case 5:  return () => k_54("", ks_122);
            default: 
              return wrongContext_0.wrongContext_1("ala", context_1, ks_122, undefined);
          }
        });
      } else if (word_7 === "kepeken") {
        switch (context_1.__tag) {
          case 3:  return () => k_54("using", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kepeken", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lon") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("truth", ks_114);
          case 1:  return () => k_54("truth", ks_114);
          case 6:  return () => k_54("existing", ks_114);
          case 3:  return () => k_54("at", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lon", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sama") {
        switch (context_1.__tag) {
          case 3:  return () => k_54("similar to", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sama", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tan") {
        switch (context_1.__tag) {
          case 3:  return () => k_54("because of", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tan", context_1, ks_114, undefined);
        }
      } else if (word_7 === "awen") {
        switch (context_1.__tag) {
          case 2: 
            const s_38 = newThirdPerson_0.value;
            return regularVerb_0("continue", s_38, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 4: 
            const s_39 = newThirdPerson_0.value;
            if (s_39) {
              return () => k_54("continues to", ks_114);
            } else {
              return () => k_54("continue to", ks_114);
            }
            break;
          default: 
            return wrongContext_0.wrongContext_1("awen", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kama") {
        switch (context_1.__tag) {
          case 4: 
            const s_40 = newThirdPerson_0.value;
            if (s_40) {
              return () => k_54("starts to", ks_114);
            } else {
              return () => k_54("start to", ks_114);
            }
            break;
          default: 
            return wrongContext_0.wrongContext_1("kama", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ken") {
        switch (context_1.__tag) {
          case 4:  return () => k_54("can", ks_114);
          case 0: 
            return regularNoun_0("possibility", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          default: 
            return wrongContext_0.wrongContext_1("ken", context_1, ks_114, undefined);
        }
      } else if (word_7 === "wile") {
        switch (context_1.__tag) {
          case 2: 
            const s_41 = newThirdPerson_0.value;
            return regularVerb_0("want", s_41, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 4: 
            const s_42 = newThirdPerson_0.value;
            if (s_42) {
              return () => k_54("wants to", ks_114);
            } else {
              return () => k_54("want to", ks_114);
            }
            break;
          default: 
            return wrongContext_0.wrongContext_1("wile", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tawa") {
        switch (context_1.__tag) {
          case 3:  return () => k_54("from the perspective of", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tawa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ni") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("this", ks_114);
          case 1:  return () => k_54("this", ks_114);
          case 6:  return () => k_54("this", ks_114);
          case 5:  return () => k_54("this", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ni", context_1, ks_114, undefined);
        }
      } else if (word_7 === "akesi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("reptile", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("reptile", ks_114, (pluralWord_2, ks_124) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("reptile", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_2, new Singular_0()), new Nil_0())), ks_124, k_54));
          case 6:  return () => k_54("reptile related", ks_114);
          case 5:  return () => k_54("reptile like", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("akesi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "alasa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("hunt", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("hunt", ks_114, (pluralWord_3, ks_125) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("hunt", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_3, new Singular_0()), new Nil_0())), ks_125, k_54));
          case 2: 
            const s_43 = newThirdPerson_0.value;
            return regularVerb_0("hunt", s_43, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("hunt related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("alasa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ale") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("everything", ks_114);
          case 1:  return () => k_54("everything", ks_114);
          case 6:  return () => k_54("all", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ale", context_1, ks_114, undefined);
        }
      } else if (word_7 === "anpa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("bottom", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("bottom", ks_114, (pluralWord_4, ks_126) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("bottom", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_4, new Singular_0()), new Nil_0())), ks_126, k_54));
          case 2: 
            const s_44 = newThirdPerson_0.value;
            return regularVerb_0("lower", s_44, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("low", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("anpa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ante") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("ante", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("difference", ks_114, (pluralWord_5, ks_127) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("difference", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_5, new Singular_0()), new Nil_0())), ks_127, k_54));
          case 2: 
            const s_45 = newThirdPerson_0.value;
            return regularVerb_0("change", s_45, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("different", ks_114);
          case 5:  return () => k_54("differently", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ante", context_1, ks_114, undefined);
        }
      } else if (word_7 === "epiku") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("epic", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("epic", ks_114, (pluralWord_6, ks_128) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("epic", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_6, new Singular_0()), new Nil_0())), ks_128, k_54));
          case 2: 
            const s_46 = newThirdPerson_0.value;
            return regularVerb_0("epicize", s_46, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 5:  return () => k_54("epicly", ks_114);
          case 6:  return () => k_54("epic", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("epiku", context_1, ks_114, undefined);
        }
      } else if (word_7 === "esun") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("market", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("market", ks_114, (pluralWord_7, ks_129) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("market", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_7, new Singular_0()), new Nil_0())), ks_129, k_54));
          case 2: 
            const s_47 = newThirdPerson_0.value;
            return regularVerb_0("trade", s_47, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("market related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("esun", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ijo") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("tool", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("thing", ks_114, (pluralWord_8, ks_130) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("thing", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_8, new Singular_0()), new Nil_0())), ks_130, k_54));
          case 2: 
            const s_48 = newThirdPerson_0.value;
            return regularVerb_0("objectify", s_48, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("tangible", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ijo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ike") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("badness", ks_114);
          case 1:  return () => k_54("badness", ks_114);
          case 2: 
            const s_49 = newThirdPerson_0.value;
            return regularVerb_0("worsen", s_49, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("bad", ks_114);
          case 5:  return () => k_54("badly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ike", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ilo") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("tool", ks_114);
          case 1:  return () => k_54("tool", ks_114);
          case 2: 
            const s_50 = newThirdPerson_0.value;
            return regularVerb_0("tool", s_50, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          default: 
            return wrongContext_0.wrongContext_1("ilo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "insa") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("inside", new FirstMeaning_0()), new Cons_0(new Tuple_0("stomach", new SecondMeaning_0()), new Nil_0())), ks_114, (v_r_42, ks_131) => {
              const output_5 = ks_131.arena.fresh(v_r_42);
              const s_51 = output_5.value;
              return regularNoun_0(s_51, ambiguity_5, setSubjectPerson_5, ks_131, (v_r_43, ks_132) => {
                output_5.value = v_r_43;
                const s_52 = output_5.value;
                DEALLOC(output_5);
                return () => k_54(s_52, ks_132);
              });
            });
          case 1: 
            return objectTwoMeaningsPlural_0("inside", "stomach", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 2: 
            const s_53 = newThirdPerson_0.value;
            return regularVerb_0("insert", s_53, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("inner", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("insa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "jaki") {
        switch (context_1.__tag) {
          case 0: 
            return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_114, (_22, ks_133) =>
              () => k_54("dirt", ks_133));
          case 1:  return () => k_54("dirt", ks_114);
          case 2: 
            const s_54 = newThirdPerson_0.value;
            return regularVerb_0("ruin", s_54, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("dirty", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("dirt", context_1, ks_114, undefined);
        }
      } else if (word_7 === "jan") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("person", new Singular_0()), new Cons_0(new Tuple_0("people", new Plural_0()), new Nil_0())), ks_114, (output_6, ks_134) => {
              if (!(output_6 === "person")) {
                return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_134, (_23, ks_135) =>
                  () => k_54(output_6, ks_135));
              } else {
                return () => k_54(output_6, ks_134);
              }
            });
          case 1: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("person", new Singular_0()), new Cons_0(new Tuple_0("people", new Plural_0()), new Nil_0())), ks_114, k_54);
          case 2: 
            const s_55 = newThirdPerson_0.value;
            return regularVerb_0("personify", s_55, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("human", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("jan", context_1, ks_114, undefined);
        }
      } else if (word_7 === "jelo") {
        switch (context_1.__tag) {
          case 0: 
            return setSubjectPerson_5.setSubjectPerson_1(new NotThird_0(), ks_114, (_24, ks_136) =>
              () => k_54("yellow", ks_136));
          case 1:  return () => k_54("yellow", ks_114);
          case 2: 
            const s_56 = newThirdPerson_0.value;
            return regularVerb_0("yellow", s_56, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("yellow", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("jelo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "jo") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("possession", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("possesion", ks_114, (pluralWord_9, ks_137) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("possesion", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_9, new Singular_0()), new Nil_0())), ks_137, k_54));
          case 2: 
            const s_57 = newThirdPerson_0.value;
            return regularVerb_0("hold", s_57, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("held", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("jo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kala") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("sea creature", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("sea creature", ks_114, (pluralWord_10, ks_138) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("sea creature", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_10, new Singular_0()), new Nil_0())), ks_138, k_54));
          case 2: 
            const s_58 = newThirdPerson_0.value;
            return regularVerb_0("insert", s_58, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("inner", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("insa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kalama") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("sound", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("sound", ks_114, (pluralWord_11, ks_139) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("sound", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_11, new Singular_0()), new Nil_0())), ks_139, k_54));
          case 2: 
            const s_59 = newThirdPerson_0.value;
            return regularVerb_0("sound", s_59, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("sound related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kalama", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kasi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("plant", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("plant", ks_114, (pluralWord_12, ks_140) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("plant", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_12, new Singular_0()), new Nil_0())), ks_140, k_54));
          case 2: 
            const s_60 = newThirdPerson_0.value;
            return regularVerb_0("plant", s_60, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("plant related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kasi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kijetesantakalu") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("raccoon", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("raccoon", ks_114, (pluralWord_13, ks_141) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("raccoon", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_13, new Singular_0()), new Nil_0())), ks_141, k_54));
          case 2: 
            const s_61 = newThirdPerson_0.value;
            return regularVerb_0("raccoonize", s_61, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("raccoon related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kijetesantakalu", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kili") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("fruit", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("fruit", ks_114, (pluralWord_14, ks_142) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("fruit", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_14, new Singular_0()), new Nil_0())), ks_142, k_54));
          case 2: 
            const s_62 = newThirdPerson_0.value;
            return regularVerb_0("plant", s_62, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("fruit related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kili", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kin") {
        switch (context_1.__tag) {
          case 5:  return () => k_54("as well", ks_114);
          case 6:  return () => k_54("also", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kipisi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("cut", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("cut", ks_114, (pluralWord_15, ks_143) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("cut", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_15, new Singular_0()), new Nil_0())), ks_143, k_54));
          case 2: 
            const s_63 = newThirdPerson_0.value;
            return regularVerb_0("cut", s_63, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("cut related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kipisi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kiwen") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("rock", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("rock", ks_114, (pluralWord_16, ks_144) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("rock", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_16, new Singular_0()), new Nil_0())), ks_144, k_54));
          case 2: 
            const s_64 = newThirdPerson_0.value;
            return regularVerb_0("rock", s_64, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("rock related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kiwen", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ko") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("paste", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("paste", ks_114, (pluralWord_17, ks_145) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("paste", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_17, new Singular_0()), new Nil_0())), ks_145, k_54));
          case 2: 
            const s_65 = newThirdPerson_0.value;
            return regularVerb_0("paste", s_65, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("paste related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ko", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kon") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("spirit", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return regularNoun_0("spirit", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 2: 
            const s_66 = newThirdPerson_0.value;
            return regularVerb_0("airify", s_66, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("airyly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kon", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kule") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("color", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("color", ks_114, (pluralWord_18, ks_146) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("color", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_18, new Singular_0()), new Nil_0())), ks_146, k_54));
          case 2: 
            const s_67 = newThirdPerson_0.value;
            return regularVerb_0("color", s_67, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("colorfull", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kule", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kulupu") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("group", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("group", ks_114, (pluralWord_19, ks_147) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("group", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_19, new Singular_0()), new Nil_0())), ks_147, k_54));
          case 2: 
            const s_68 = newThirdPerson_0.value;
            return regularVerb_0("group", s_68, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("group related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kulupu", context_1, ks_114, undefined);
        }
      } else if (word_7 === "kute") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("ear", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("ear", ks_114, (pluralWord_20, ks_148) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("ear", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_20, new Singular_0()), new Nil_0())), ks_148, k_54));
          case 2: 
            const s_69 = newThirdPerson_0.value;
            return verbTwoMeanings_0("hear", "follow", s_69, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("auditory", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("kute", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lanpan") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("Stealing", ks_114);
          case 1:  return () => k_54("Stealing", ks_114);
          case 2: 
            const s_70 = newThirdPerson_0.value;
            return regularVerb_0("steal", s_70, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("stealing", ks_114);
          case 5:  return () => k_54("stealingly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lanpan", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lape") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("sleep", ks_114);
          case 1:  return () => k_54("sleep", ks_114);
          case 2: 
            const s_71 = newThirdPerson_0.value;
            return regularVerb_0("sleep", s_71, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("sleepy", ks_114);
          case 5:  return () => k_54("sleepily", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lape", context_1, ks_114, undefined);
        }
      } else if (word_7 === "laso") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("blue", ks_114);
          case 1:  return () => k_54("blue", ks_114);
          case 2: 
            const s_72 = newThirdPerson_0.value;
            return regularVerb_0("blue", s_72, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("blue", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("laso", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lawa") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("head", new FirstMeaning_0()), new Cons_0(new Tuple_0("leader", new SecondMeaning_0()), new Nil_0())), ks_114, (v_r_44, ks_149) => {
              const output_7 = ks_149.arena.fresh(v_r_44);
              const s_73 = output_7.value;
              return regularNoun_0(s_73, ambiguity_5, setSubjectPerson_5, ks_149, (v_r_45, ks_150) => {
                output_7.value = v_r_45;
                const s_74 = output_7.value;
                DEALLOC(output_7);
                return () => k_54(s_74, ks_150);
              });
            });
          case 1: 
            return objectTwoMeaningsPlural_0("head", "leader", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 2: 
            const s_75 = newThirdPerson_0.value;
            return verbTwoMeanings_0("lead", "head", s_75, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("head related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lawa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "leko") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("block", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("block", ks_114, (pluralWord_21, ks_151) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("block", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_21, new Singular_0()), new Nil_0())), ks_151, k_54));
          case 6:  return () => k_54("square", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("leko", context_1, ks_114, undefined);
        }
      } else if (word_7 === "len") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("cloth", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("cloth", ks_114, (pluralWord_22, ks_152) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("cloth", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_22, new Singular_0()), new Nil_0())), ks_152, k_54));
          case 2: 
            const s_76 = newThirdPerson_0.value;
            return regularVerb_0("cover", s_76, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("clothed", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("len", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lete") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("coldness", ks_114);
          case 1:  return () => k_54("coldness", ks_114);
          case 2: 
            const s_77 = newThirdPerson_0.value;
            return regularVerb_0("cool", s_77, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("cold", ks_114);
          case 5:  return () => k_54("coldly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lete", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lili") {
        switch (context_1.__tag) {
          case 2: 
            const s_78 = newThirdPerson_0.value;
            return regularVerb_0("reduce", s_78, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("small", ks_114);
          case 1:  return () => k_54("small", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lili", context_1, ks_114, undefined);
        }
      } else if (word_7 === "linja") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("rope", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("rope", ks_114, (pluralWord_23, ks_153) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("rope", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_23, new Singular_0()), new Nil_0())), ks_153, k_54));
          case 6:  return () => k_54("rope like", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("linja", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lipu") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("text", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("text", ks_114, (pluralWord_24, ks_154) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("text", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_24, new Singular_0()), new Nil_0())), ks_154, k_54));
          case 2: 
            const s_79 = newThirdPerson_0.value;
            return regularVerb_0("flatten", s_79, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("flatt", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lipu", context_1, ks_114, undefined);
        }
      } else if (word_7 === "loje") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("red", ks_114);
          case 1:  return () => k_54("red", ks_114);
          case 2: 
            const s_80 = newThirdPerson_0.value;
            return regularVerb_0("red", s_80, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("red", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("loje", context_1, ks_114, undefined);
        }
      } else if (word_7 === "luka") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("hand", new FirstMeaning_0()), new Cons_0(new Tuple_0("five", new SecondMeaning_0()), new Nil_0())), ks_114, (v_r_46, ks_155) => {
              const output_8 = ks_155.arena.fresh(v_r_46);
              const s_81 = output_8.value;
              return regularNoun_0(s_81, ambiguity_5, setSubjectPerson_5, ks_155, (v_r_47, ks_156) => {
                output_8.value = v_r_47;
                const s_82 = output_8.value;
                DEALLOC(output_8);
                return () => k_54(s_82, ks_156);
              });
            });
          case 1: 
            return objectTwoMeaningsPlural_0("hand", "five", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 2: 
            const s_83 = newThirdPerson_0.value;
            return regularVerb_0("touch", s_83, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("five", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("luka", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lukin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("eye", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("eye", ks_114, (pluralWord_25, ks_157) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("eye", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_25, new Singular_0()), new Nil_0())), ks_157, k_54));
          case 2: 
            const s_84 = newThirdPerson_0.value;
            return regularVerb_0("see", s_84, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("visual", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lukin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "lupa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("hole", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("hole", ks_114, (pluralWord_26, ks_158) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("hole", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_26, new Singular_0()), new Nil_0())), ks_158, k_54));
          case 2: 
            const s_85 = newThirdPerson_0.value;
            return regularVerb_0("dig", s_85, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("holed", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("lupa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "ma") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("land", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("land", ks_114, (pluralWord_27, ks_159) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("land", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_27, new Singular_0()), new Nil_0())), ks_159, k_54));
          case 6:  return () => k_54("land", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("ma", context_1, ks_114, undefined);
        }
      } else if (word_7 === "mama") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("parent", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("parent", ks_114, (pluralWord_28, ks_160) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("parent", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_28, new Singular_0()), new Nil_0())), ks_160, k_54));
          case 2: 
            const s_86 = newThirdPerson_0.value;
            return regularVerb_0("parent", s_86, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("parent", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mama", context_1, ks_114, undefined);
        }
      } else if (word_7 === "mani") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("money", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("money", ks_114, (pluralWord_29, ks_161) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("money", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_29, new Singular_0()), new Nil_0())), ks_161, k_54));
          case 2: 
            const s_87 = newThirdPerson_0.value;
            return regularVerb_0("pay", s_87, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("money related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mani", context_1, ks_114, undefined);
        }
      } else if (word_7 === "meli") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("woman", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("woman", ks_114, (pluralWord_30, ks_162) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("woman", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_30, new Singular_0()), new Nil_0())), ks_162, k_54));
          case 6:  return () => k_54("womanly", ks_114);
          case 5:  return () => k_54("womanly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("meli", context_1, ks_114, undefined);
        }
      } else if (word_7 === "mije") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("man", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("man", ks_114, (pluralWord_31, ks_163) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("man", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_31, new Singular_0()), new Nil_0())), ks_163, k_54));
          case 6:  return () => k_54("manly", ks_114);
          case 5:  return () => k_54("manly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mije", context_1, ks_114, undefined);
        }
      } else if (word_7 === "moku") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("food", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("food", ks_114, (pluralWord_32, ks_164) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("food", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_32, new Singular_0()), new Nil_0())), ks_164, k_54));
          case 2: 
            const s_88 = newThirdPerson_0.value;
            return regularVerb_0("eat", s_88, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("food", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("moku", context_1, ks_114, undefined);
        }
      } else if (word_7 === "misikeke") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("medicine", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("medicine", ks_114, (pluralWord_33, ks_165) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("medicine", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_33, new Singular_0()), new Nil_0())), ks_165, k_54));
          case 2: 
            const s_89 = newThirdPerson_0.value;
            return regularVerb_0("cures", s_89, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("medical", ks_114);
          case 5:  return () => k_54("medicaly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("misikeke", context_1, ks_114, undefined);
        }
      } else if (word_7 === "moli") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("death", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("death", ks_114, (pluralWord_34, ks_166) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("death", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_34, new Singular_0()), new Nil_0())), ks_166, k_54));
          case 2: 
            const s_90 = newThirdPerson_0.value;
            return regularVerb_0("kill", s_90, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("dead", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("moli", context_1, ks_114, undefined);
        }
      } else if (word_7 === "monsi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("back", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("back", ks_114, (pluralWord_35, ks_167) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("back", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_35, new Singular_0()), new Nil_0())), ks_167, k_54));
          case 6:  return () => k_54("back", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("monsi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "monsuta") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("monster", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("monster", ks_114, (pluralWord_36, ks_168) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("monster", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_36, new Singular_0()), new Nil_0())), ks_168, k_54));
          case 2: 
            const s_91 = newThirdPerson_0.value;
            return regularVerb_0("scare", s_91, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("scary", ks_114);
          case 5:  return () => k_54("scaryly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("monsuta", context_1, ks_114, undefined);
        }
      } else if (word_7 === "mun") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("moon", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("moon", ks_114, (pluralWord_37, ks_169) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("moon", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_37, new Singular_0()), new Nil_0())), ks_169, k_54));
          case 6:  return () => k_54("moon", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mun", context_1, ks_114, undefined);
        }
      } else if (word_7 === "musi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("game", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("game", ks_114, (pluralWord_38, ks_170) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("game", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_38, new Singular_0()), new Nil_0())), ks_170, k_54));
          case 2: 
            const s_92 = newThirdPerson_0.value;
            return regularVerb_0("play", s_92, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("fun", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("musi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "mute") {
        switch (context_1.__tag) {
          case 2: 
            const s_93 = newThirdPerson_0.value;
            return regularVerb_0("multiply", s_93, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("many", ks_114);
          case 5:  return () => k_54("much", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("mute", context_1, ks_114, undefined);
        }
      } else if (word_7 === "namako") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("extra", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("extra", ks_114, (pluralWord_39, ks_171) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("extra", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_39, new Singular_0()), new Nil_0())), ks_171, k_54));
          case 2: 
            const s_94 = newThirdPerson_0.value;
            return regularVerb_0("embellish", s_94, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("extra", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("namako", context_1, ks_114, undefined);
        }
      } else if (word_7 === "nanpa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("number", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("number", ks_114, (pluralWord_40, ks_172) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("number", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_40, new Singular_0()), new Nil_0())), ks_172, k_54));
          case 2: 
            const s_95 = newThirdPerson_0.value;
            return regularVerb_0("count", s_95, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("numerical", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("nanpa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "nasa") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("weirdness", ks_114);
          case 1:  return () => k_54("weirdness", ks_114);
          case 2: 
            const s_96 = newThirdPerson_0.value;
            return regularVerb_0("confuse", s_96, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("weird", ks_114);
          case 5:  return () => k_54("weirdly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("nasa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "nasin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("way", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("way", ks_114, (pluralWord_41, ks_173) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("way", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_41, new Singular_0()), new Nil_0())), ks_173, k_54));
          case 2: 
            const s_97 = newThirdPerson_0.value;
            return regularVerb_0("follow", s_97, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("way", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("nasin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "nena") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("hill", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("hill", ks_114, (pluralWord_42, ks_174) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("hill", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_42, new Singular_0()), new Nil_0())), ks_174, k_54));
          case 6:  return () => k_54("bumpy", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("nena", context_1, ks_114, undefined);
        }
      } else if (word_7 === "nimi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("name", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("name", ks_114, (pluralWord_43, ks_175) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("name", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_43, new Singular_0()), new Nil_0())), ks_175, k_54));
          case 2: 
            const s_98 = newThirdPerson_0.value;
            return regularVerb_0("name", s_98, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("named", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("nimi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "noka") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("foot", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("foot", ks_114, (pluralWord_44, ks_176) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("foot", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_44, new Singular_0()), new Nil_0())), ks_176, k_54));
          case 6:  return () => k_54("foot", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("noka", context_1, ks_114, undefined);
        }
      } else if (word_7 === "oko") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("eye", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("eye", ks_114, (pluralWord_45, ks_177) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("eye", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_45, new Singular_0()), new Nil_0())), ks_177, k_54));
          case 2: 
            const s_99 = newThirdPerson_0.value;
            return regularVerb_0("see", s_99, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("visible", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("oko", context_1, ks_114, undefined);
        }
      } else if (word_7 === "olin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("love", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("love", ks_114, (pluralWord_46, ks_178) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("love", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_46, new Singular_0()), new Nil_0())), ks_178, k_54));
          case 2: 
            const s_100 = newThirdPerson_0.value;
            return regularVerb_0("love", s_100, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("loving", ks_114);
          case 5:  return () => k_54("lovingly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("olin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "open") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("opening", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("opening", ks_114, (pluralWord_47, ks_179) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("opening", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_47, new Singular_0()), new Nil_0())), ks_179, k_54));
          case 2: 
            const s_101 = newThirdPerson_0.value;
            return regularVerb_0("open", s_101, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("open", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("open", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pakala") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("mistake", ks_114);
          case 1:  return () => k_54("mistake", ks_114);
          case 2: 
            const s_102 = newThirdPerson_0.value;
            return regularVerb_0("break", s_102, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("broken", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pakala", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pali") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("work", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("work", ks_114, (pluralWord_48, ks_180) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("work", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_48, new Singular_0()), new Nil_0())), ks_180, k_54));
          case 2: 
            const s_103 = newThirdPerson_0.value;
            return regularVerb_0("build", s_103, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("work", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pali", context_1, ks_114, undefined);
        }
      } else if (word_7 === "palisa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("stick", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("stick", ks_114, (pluralWord_49, ks_181) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("stick", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_49, new Singular_0()), new Nil_0())), ks_181, k_54));
          case 6:  return () => k_54("stick shaped", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("palisa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pan") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("bread", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("bread", ks_114, (pluralWord_50, ks_182) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("bread", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_50, new Singular_0()), new Nil_0())), ks_182, k_54));
          case 6:  return () => k_54("bread", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pan", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pana") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("giver", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("giver", ks_114, (pluralWord_51, ks_183) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("giver", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_51, new Singular_0()), new Nil_0())), ks_183, k_54));
          case 2: 
            const s_104 = newThirdPerson_0.value;
            return regularVerb_0("give", s_104, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("giving", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pana", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pilin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("feeling", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("feeling", ks_114, (pluralWord_52, ks_184) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("feeling", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_52, new Singular_0()), new Nil_0())), ks_184, k_54));
          case 2: 
            const s_105 = newThirdPerson_0.value;
            return regularVerb_0("feel", s_105, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("feeling", ks_114);
          case 5:  return () => k_54("with feeling", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pilin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pimeja") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("darkness", ks_114);
          case 1:  return () => k_54("darkness", ks_114);
          case 2: 
            const s_106 = newThirdPerson_0.value;
            return regularVerb_0("darken", s_106, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("dark", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pimeja", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pini") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("end", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("end", ks_114, (pluralWord_53, ks_185) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("end", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_53, new Singular_0()), new Nil_0())), ks_185, k_54));
          case 2: 
            const s_107 = newThirdPerson_0.value;
            return regularVerb_0("end", s_107, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("end", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pini", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pipi") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("bug", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("bug", ks_114, (pluralWord_54, ks_186) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("bug", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_54, new Singular_0()), new Nil_0())), ks_186, k_54));
          case 6:  return () => k_54("bug", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pipi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "pona") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("Goodness", ks_114);
          case 1:  return () => k_54("Goodness", ks_114);
          case 2: 
            const s_108 = newThirdPerson_0.value;
            return regularVerb_0("improve", s_108, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("good", ks_114);
          case 5:  return () => k_54("well", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("pona", context_1, ks_114, undefined);
        }
      } else if (word_7 === "poka") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("side", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("side", ks_114, (pluralWord_55, ks_187) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("side", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_55, new Singular_0()), new Nil_0())), ks_187, k_54));
          case 6:  return () => k_54("side", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("poka", context_1, ks_114, undefined);
        }
      } else if (word_7 === "poki") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("container", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("container", ks_114, (pluralWord_56, ks_188) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("container", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_56, new Singular_0()), new Nil_0())), ks_188, k_54));
          case 2: 
            const s_109 = newThirdPerson_0.value;
            return regularVerb_0("contain", s_109, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("container", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("poki", context_1, ks_114, undefined);
        }
      } else if (word_7 === "seli") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("heat", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("heat", ks_114, (pluralWord_57, ks_189) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("heat", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_57, new Singular_0()), new Nil_0())), ks_189, k_54));
          case 2: 
            const s_110 = newThirdPerson_0.value;
            return regularVerb_0("heat", s_110, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("hot", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("seli", context_1, ks_114, undefined);
        }
      } else if (word_7 === "selo") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("skin", new FirstMeaning_0()), new Cons_0(new Tuple_0("outside", new SecondMeaning_0()), new Nil_0())), ks_114, (v_r_48, ks_190) => {
              const output_9 = ks_190.arena.fresh(v_r_48);
              const s_111 = output_9.value;
              return regularNoun_0(s_111, ambiguity_5, setSubjectPerson_5, ks_190, (v_r_49, ks_191) => {
                output_9.value = v_r_49;
                const s_112 = output_9.value;
                DEALLOC(output_9);
                return () => k_54(s_112, ks_191);
              });
            });
          case 1: 
            return objectTwoMeaningsPlural_0("skin", "outside", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("outside", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("selo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sewi") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("sky", new Singular_0()), new Cons_0(new Tuple_0("holiness", new Plural_0()), new Nil_0())), ks_114, k_54);
          case 1: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("sky", new Singular_0()), new Cons_0(new Tuple_0("holiness", new Plural_0()), new Nil_0())), ks_114, k_54);
          case 2: 
            const s_113 = newThirdPerson_0.value;
            return verbTwoMeanings_0("lift", "sanctify", s_113, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("up", new Singular_0()), new Cons_0(new Tuple_0("holy", new Plural_0()), new Nil_0())), ks_114, k_54);
          default: 
            return wrongContext_0.wrongContext_1("sewi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sijelo") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("body", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("body", ks_114, (pluralWord_58, ks_192) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("body", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_58, new Singular_0()), new Nil_0())), ks_192, k_54));
          case 2: 
            const s_114 = newThirdPerson_0.value;
            return regularVerb_0("embody", s_114, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("body related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sijelo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sike") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("circle", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("circle", ks_114, (pluralWord_59, ks_193) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("circle", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_59, new Singular_0()), new Nil_0())), ks_193, k_54));
          case 6:  return () => k_54("round", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sike", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("newness", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("newness", ks_114, (pluralWord_60, ks_194) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("newness", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_60, new Singular_0()), new Nil_0())), ks_194, k_54));
          case 2: 
            const s_115 = newThirdPerson_0.value;
            return regularVerb_0("renew", s_115, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("new", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sinpin") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("front", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("front", ks_114, (pluralWord_61, ks_195) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("front", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_61, new Singular_0()), new Nil_0())), ks_195, k_54));
          case 6:  return () => k_54("front", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sinpin", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sitelen") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("picture", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("picture", ks_114, (pluralWord_62, ks_196) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("picture", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_62, new Singular_0()), new Nil_0())), ks_196, k_54));
          case 2: 
            const s_116 = newThirdPerson_0.value;
            return regularVerb_0("draw", s_116, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("pictorial", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sitelen", context_1, ks_114, undefined);
        }
      } else if (word_7 === "soko") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("mushroom", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("mushroom", ks_114, (pluralWord_63, ks_197) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("mushroom", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_63, new Singular_0()), new Nil_0())), ks_197, k_54));
          case 6:  return () => k_54("mushroom related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("soka", context_1, ks_114, undefined);
        }
      } else if (word_7 === "sona") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("knowledge", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("knowledge", ks_114, (pluralWord_64, ks_198) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("knowledge", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_64, new Singular_0()), new Nil_0())), ks_198, k_54));
          case 2: 
            const s_117 = newThirdPerson_0.value;
            return verbTwoMeanings_0("know", "learn", s_117, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("wise", ks_114);
          case 5:  return () => k_54("wisely", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("sona", context_1, ks_114, undefined);
        }
      } else if (word_7 === "soweli") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("animal", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("animal", ks_114, (pluralWord_65, ks_199) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("animal", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_65, new Singular_0()), new Nil_0())), ks_199, k_54));
          case 6:  return () => k_54("animal related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("soweli", context_1, ks_114, undefined);
        }
      } else if (word_7 === "suli") {
        switch (context_1.__tag) {
          case 2: 
            const s_118 = newThirdPerson_0.value;
            return regularVerb_0("enlarge", s_118, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("big", ks_114);
          case 1:  return () => k_54("big", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("suli", context_1, ks_114, undefined);
        }
      } else if (word_7 === "suno") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("sun", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("sun", ks_114, (pluralWord_66, ks_200) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("sun", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_66, new Singular_0()), new Nil_0())), ks_200, k_54));
          case 2: 
            const s_119 = newThirdPerson_0.value;
            return regularVerb_0("shine", s_119, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("sunny", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("suno", context_1, ks_114, undefined);
        }
      } else if (word_7 === "supa") {
        switch (context_1.__tag) {
          case 0: 
            return ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("surface", new FirstMeaning_0()), new Cons_0(new Tuple_0("furniture", new SecondMeaning_0()), new Nil_0())), ks_114, (v_r_50, ks_201) => {
              const output_10 = ks_201.arena.fresh(v_r_50);
              const s_120 = output_10.value;
              return regularNoun_0(s_120, ambiguity_5, setSubjectPerson_5, ks_201, (v_r_51, ks_202) => {
                output_10.value = v_r_51;
                const s_121 = output_10.value;
                DEALLOC(output_10);
                return () => k_54(s_121, ks_202);
              });
            });
          case 1: 
            return objectTwoMeaningsPlural_0("surface", "furniture", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("horizontal", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("supa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "suwi") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("sweetness", ks_114);
          case 1:  return () => k_54("sweetness", ks_114);
          case 2: 
            const s_122 = newThirdPerson_0.value;
            return regularVerb_0("sweeten", s_122, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("sweet", ks_114);
          case 5:  return () => k_54("sweetly", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("suwi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "telo") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("water", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("water", ks_114, (pluralWord_67, ks_203) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("water", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_67, new Singular_0()), new Nil_0())), ks_203, k_54));
          case 2: 
            const s_123 = newThirdPerson_0.value;
            return regularVerb_0("splash", s_123, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("wet", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("telo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tenpo") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("time", ks_114);
          case 1:  return () => k_54("time", ks_114);
          case 6:  return () => k_54("time", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tenpo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "toki") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("language", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("language", ks_114, (pluralWord_68, ks_204) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("language", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_68, new Singular_0()), new Nil_0())), ks_204, k_54));
          case 2: 
            const s_124 = newThirdPerson_0.value;
            return regularVerb_0("talk", s_124, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("linguistic", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("toki", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tomo") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("house", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("house", ks_114, (pluralWord_69, ks_205) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("house", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_69, new Singular_0()), new Nil_0())), ks_205, k_54));
          case 2: 
            const s_125 = newThirdPerson_0.value;
            return regularVerb_0("build", s_125, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("house", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tomo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tonsi") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("non-binary", ks_114);
          case 1:  return () => k_54("non-binary", ks_114);
          case 6:  return () => k_54("non-binary", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tonsi", context_1, ks_114, undefined);
        }
      } else if (word_7 === "tu") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("two", ks_114);
          case 1:  return () => k_54("two", ks_114);
          case 2: 
            const s_126 = newThirdPerson_0.value;
            return regularVerb_0("halve", s_126, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("two", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("tu", context_1, ks_114, undefined);
        }
      } else if (word_7 === "unpa") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("sex", ks_114);
          case 1:  return () => k_54("sex", ks_114);
          case 2: 
            const s_127 = newThirdPerson_0.value;
            if (s_127) {
              return () => k_54("has sex", ks_114);
            } else {
              return () => k_54("have sex", ks_114);
            }
            break;
          case 6:  return () => k_54("sexual", ks_114);
          case 5:  return () => k_54("sexually", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("unpa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "uta") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("mouth", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("mouth", ks_114, (pluralWord_70, ks_206) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("mouth", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_70, new Singular_0()), new Nil_0())), ks_206, k_54));
          case 6:  return () => k_54("mouth related", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("uta", context_1, ks_114, undefined);
        }
      } else if (word_7 === "utala") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("fight", ks_114);
          case 1:  return () => k_54("fight", ks_114);
          case 2: 
            const s_128 = newThirdPerson_0.value;
            return regularVerb_0("fight", s_128, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("fighting", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("utala", context_1, ks_114, undefined);
        }
      } else if (word_7 === "walo") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("white", ks_114);
          case 1:  return () => k_54("white", ks_114);
          case 2: 
            const s_129 = newThirdPerson_0.value;
            return regularVerb_0("whiten", s_129, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("white", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("walo", context_1, ks_114, undefined);
        }
      } else if (word_7 === "wan") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("one", ks_114);
          case 1:  return () => k_54("one", ks_114);
          case 2: 
            const s_130 = newThirdPerson_0.value;
            return regularVerb_0("unify", s_130, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("unique", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("wan", context_1, ks_114, undefined);
        }
      } else if (word_7 === "waso") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("bird", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("bird", ks_114, (pluralWord_71, ks_207) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("bird", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_71, new Singular_0()), new Nil_0())), ks_207, k_54));
          case 6:  return () => k_54("bird related", ks_114);
          case 5:  return () => k_54("like a bird", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("waso", context_1, ks_114, undefined);
        }
      } else if (word_7 === "wawa") {
        switch (context_1.__tag) {
          case 0: 
            return regularNoun_0("power", ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 1: 
            return formPlural_0("power", ks_114, (pluralWord_72, ks_208) =>
              ambiguity_5.ambiguity_1(new Cons_0(new Tuple_0("power", new Plural_0()), new Cons_0(new Tuple_0(pluralWord_72, new Singular_0()), new Nil_0())), ks_208, k_54));
          case 2: 
            const s_131 = newThirdPerson_0.value;
            return regularVerb_0("power", s_131, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("electric", ks_114);
          case 5:  return () => k_54("powerfully", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("wawa", context_1, ks_114, undefined);
        }
      } else if (word_7 === "weka") {
        switch (context_1.__tag) {
          case 0:  return () => k_54("absence", ks_114);
          case 1:  return () => k_54("absence", ks_114);
          case 2: 
            const s_132 = newThirdPerson_0.value;
            return regularVerb_0("remove", s_132, ambiguity_5, setSubjectPerson_5, ks_114, k_54);
          case 6:  return () => k_54("absent", ks_114);
          case 5:  return () => k_54("absently", ks_114);
          default: 
            return wrongContext_0.wrongContext_1("weka", context_1, ks_114, undefined);
        }
      } else if (word_7 === "") {
        return wrongContext_0.wrongContext_1("Input is empty", context_1, ks_114, undefined);
      } else {
        return () => k_54(word_7, ks_114);
      }
    }, ks_209, k_58);
  }
  switch (context_1.__tag) {
    case 2: 
      if (negate_0) {
        return negateNext_0.negateNext_1(false, ks_113, (_26, ks_210) => {
          newThirdPerson_0.value = false;
          return l_17($effekt.unit, ks_210, (tmp_14, ks_211) => {
            DEALLOC(newThirdPerson_0);
            return () => k_59(tmp_14, ks_211);
          });
        });
      } else {
        return l_17($effekt.unit, ks_113, (tmp_14, ks_212) => {
          DEALLOC(newThirdPerson_0);
          return () => k_59(tmp_14, ks_212);
        });
      }
      break;
    default: 
      return l_17($effekt.unit, ks_113, (tmp_14, ks_213) => {
        DEALLOC(newThirdPerson_0);
        return () => k_59(tmp_14, ks_213);
      });
  }
}

function modifierContainsAla_0(modifiers_8, ks_214, k_63) {
  const output_11 = ks_214.arena.fresh(false);
  function foreach_worker_15(l_18, ks_215, k_60) {
    switch (l_18.__tag) {
      case 0:  return () => k_60($effekt.unit, ks_215);
      case 1: 
        const head_16 = l_18.head_0;
        const tail_12 = l_18.tail_0;
        function l_19(_27, ks_216, k_61) {
          return foreach_worker_15(tail_12, ks_216, k_61);
        }
        switch (head_16.__tag) {
          case 3: 
            const head_17 = head_16.head_1;
            const modifiers_7 = head_16.modifiers_0;
            const n_5 = ks_215.arena.fresh(0);
            function foreach_worker_16(l_20, ks_217, k_62) {
              foreach_worker_17: while (true) {
                switch (l_20.__tag) {
                  case 0:  return () => k_62($effekt.unit, ks_217);
                  case 1: 
                    const tail_13 = l_20.tail_0;
                    const s_133 = n_5.value;
                    n_5.value = (s_133 + (1));
                    /* prepare call */
                    l_20 = tail_13;
                    continue foreach_worker_17;
                }
              }
            }
            return foreach_worker_16(modifiers_7, ks_215, (_28, ks_218) => {
              const s_134 = n_5.value;
              if (s_134 === (0)) {
                switch (head_17.__tag) {
                  case 0: 
                    output_11.value = false;
                    return l_19($effekt.unit, ks_218, (tmp_15, ks_219) => {
                      DEALLOC(n_5);
                      return () => k_60(tmp_15, ks_219);
                    });
                  case 1: 
                    const a_2 = head_17.head_0;
                    if (a_2 === "ala") {
                      output_11.value = true;
                      return l_19($effekt.unit, ks_218, (tmp_15, ks_220) => {
                        DEALLOC(n_5);
                        return () => k_60(tmp_15, ks_220);
                      });
                    } else {
                      output_11.value = false;
                      return l_19($effekt.unit, ks_218, (tmp_15, ks_221) => {
                        DEALLOC(n_5);
                        return () => k_60(tmp_15, ks_221);
                      });
                    }
                    break;
                }
              } else {
                return l_19($effekt.unit, ks_218, (tmp_15, ks_222) => {
                  DEALLOC(n_5);
                  return () => k_60(tmp_15, ks_222);
                });
              }
            });
          default: 
            output_11.value = false;
            return l_19($effekt.unit, ks_215, k_60);
        }
        break;
    }
  }
  return foreach_worker_15(modifiers_8, ks_214, (_29, ks_223) => {
    const s_135 = output_11.value;
    DEALLOC(output_11);
    return () => k_63(s_135, ks_223);
  });
}

function resize_0(source_0, size_2, ks_225, k_65) {
  const tmp_16 = (new Uint8Array(size_2));
  const tmp_17 = source_0.length;
  const tmp_18 = tmp_16.length;
  if ((tmp_17 < tmp_18)) {
    function go_9(i_3, ks_224, k_64) {
      go_10: while (true) {
        if ((i_3 < tmp_17)) {
          const tmp_19 = (source_0)[i_3];
          const tmp_20 = bytearray$set(tmp_16, i_3, tmp_19);
          /* prepare call */
          const tmp_i_3 = i_3;
          i_3 = (tmp_i_3 + (1));
          continue go_10;
        } else {
          return () => k_64(tmp_16, ks_224);
        }
      }
    }
    return go_9(0, ks_225, k_65);
  } else {
    function go_11(i_4, ks_226, k_66) {
      go_12: while (true) {
        if ((i_4 < tmp_18)) {
          const tmp_21 = (source_0)[i_4];
          const tmp_22 = bytearray$set(tmp_16, i_4, tmp_21);
          /* prepare call */
          const tmp_i_4 = i_4;
          i_4 = (tmp_i_4 + (1));
          continue go_12;
        } else {
          return () => k_66(tmp_16, ks_226);
        }
      }
    }
    return go_11(0, ks_225, k_65);
  }
}

function main_0(ks_1119, k_1099) {
  return RESET((p_5, ks_227, k_67) =>
    openForReading_0("Data.txt", ks_227, (v_r_52, ks_228) => {
      let file_3 = undefined;
      if ((v_r_52 < (0))) {
        const tmp_23 = errorNumber(v_r_52);
        function l_21(ioError_0, ks_230, k_224) {
          switch (ioError_0.__tag) {
            case 0: 
              return SHIFT(p_5, (k_68, ks_229, k_69) => {
                const tmp_24 = $effekt.println("argument list too long");
                return () => k_69(tmp_24, ks_229);
              }, ks_230, undefined);
            case 1: 
              return SHIFT(p_5, (k_70, ks_231, k_71) => {
                const tmp_25 = $effekt.println("permission denied");
                return () => k_71(tmp_25, ks_231);
              }, ks_230, undefined);
            case 2: 
              return SHIFT(p_5, (k_72, ks_232, k_73) => {
                const tmp_26 = $effekt.println("address already in use");
                return () => k_73(tmp_26, ks_232);
              }, ks_230, undefined);
            case 3: 
              return SHIFT(p_5, (k_74, ks_233, k_75) => {
                const tmp_27 = $effekt.println("address not available");
                return () => k_75(tmp_27, ks_233);
              }, ks_230, undefined);
            case 4: 
              return SHIFT(p_5, (k_76, ks_234, k_77) => {
                const tmp_28 = $effekt.println("address family not supported");
                return () => k_77(tmp_28, ks_234);
              }, ks_230, undefined);
            case 5: 
              return SHIFT(p_5, (k_78, ks_235, k_79) => {
                const tmp_29 = $effekt.println("resource temporarily unavailable");
                return () => k_79(tmp_29, ks_235);
              }, ks_230, undefined);
            case 6: 
              return SHIFT(p_5, (k_80, ks_236, k_81) => {
                const tmp_30 = $effekt.println("address family not supported");
                return () => k_81(tmp_30, ks_236);
              }, ks_230, undefined);
            case 7: 
              return SHIFT(p_5, (k_82, ks_237, k_83) => {
                const tmp_31 = $effekt.println("temporary failure");
                return () => k_83(tmp_31, ks_237);
              }, ks_230, undefined);
            case 8: 
              return SHIFT(p_5, (k_84, ks_238, k_85) => {
                const tmp_32 = $effekt.println("bad ai_flags value");
                return () => k_85(tmp_32, ks_238);
              }, ks_230, undefined);
            case 9: 
              return SHIFT(p_5, (k_86, ks_239, k_87) => {
                const tmp_33 = $effekt.println("invalid value for hints");
                return () => k_87(tmp_33, ks_239);
              }, ks_230, undefined);
            case 10: 
              return SHIFT(p_5, (k_88, ks_240, k_89) => {
                const tmp_34 = $effekt.println("request canceled");
                return () => k_89(tmp_34, ks_240);
              }, ks_230, undefined);
            case 11: 
              return SHIFT(p_5, (k_90, ks_241, k_91) => {
                const tmp_35 = $effekt.println("permanent failure");
                return () => k_91(tmp_35, ks_241);
              }, ks_230, undefined);
            case 12: 
              return SHIFT(p_5, (k_92, ks_242, k_93) => {
                const tmp_36 = $effekt.println("ai_family not supported");
                return () => k_93(tmp_36, ks_242);
              }, ks_230, undefined);
            case 13: 
              return SHIFT(p_5, (k_94, ks_243, k_95) => {
                const tmp_37 = $effekt.println("out of memory");
                return () => k_95(tmp_37, ks_243);
              }, ks_230, undefined);
            case 14: 
              return SHIFT(p_5, (k_96, ks_244, k_97) => {
                const tmp_38 = $effekt.println("no address");
                return () => k_97(tmp_38, ks_244);
              }, ks_230, undefined);
            case 15: 
              return SHIFT(p_5, (k_98, ks_245, k_99) => {
                const tmp_39 = $effekt.println("unknown node or service");
                return () => k_99(tmp_39, ks_245);
              }, ks_230, undefined);
            case 16: 
              return SHIFT(p_5, (k_100, ks_246, k_101) => {
                const tmp_40 = $effekt.println("argument buffer overflow");
                return () => k_101(tmp_40, ks_246);
              }, ks_230, undefined);
            case 17: 
              return SHIFT(p_5, (k_102, ks_247, k_103) => {
                const tmp_41 = $effekt.println("resolved protocol is unknown");
                return () => k_103(tmp_41, ks_247);
              }, ks_230, undefined);
            case 18: 
              return SHIFT(p_5, (k_104, ks_248, k_105) => {
                const tmp_42 = $effekt.println("service not available for socket type");
                return () => k_105(tmp_42, ks_248);
              }, ks_230, undefined);
            case 19: 
              return SHIFT(p_5, (k_106, ks_249, k_107) => {
                const tmp_43 = $effekt.println("socket type not supported");
                return () => k_107(tmp_43, ks_249);
              }, ks_230, undefined);
            case 20: 
              return SHIFT(p_5, (k_108, ks_250, k_109) => {
                const tmp_44 = $effekt.println("connection already in progress");
                return () => k_109(tmp_44, ks_250);
              }, ks_230, undefined);
            case 21: 
              return SHIFT(p_5, (k_110, ks_251, k_111) => {
                const tmp_45 = $effekt.println("bad file descriptor");
                return () => k_111(tmp_45, ks_251);
              }, ks_230, undefined);
            case 22: 
              return SHIFT(p_5, (k_112, ks_252, k_113) => {
                const tmp_46 = $effekt.println("resource busy or locked");
                return () => k_113(tmp_46, ks_252);
              }, ks_230, undefined);
            case 23: 
              return SHIFT(p_5, (k_114, ks_253, k_115) => {
                const tmp_47 = $effekt.println("operation canceled");
                return () => k_115(tmp_47, ks_253);
              }, ks_230, undefined);
            case 24: 
              return SHIFT(p_5, (k_116, ks_254, k_117) => {
                const tmp_48 = $effekt.println("invalid Unicode character");
                return () => k_117(tmp_48, ks_254);
              }, ks_230, undefined);
            case 25: 
              return SHIFT(p_5, (k_118, ks_255, k_119) => {
                const tmp_49 = $effekt.println("software caused connection abort");
                return () => k_119(tmp_49, ks_255);
              }, ks_230, undefined);
            case 26: 
              return SHIFT(p_5, (k_120, ks_256, k_121) => {
                const tmp_50 = $effekt.println("connection refused");
                return () => k_121(tmp_50, ks_256);
              }, ks_230, undefined);
            case 27: 
              return SHIFT(p_5, (k_122, ks_257, k_123) => {
                const tmp_51 = $effekt.println("connection reset by peer");
                return () => k_123(tmp_51, ks_257);
              }, ks_230, undefined);
            case 28: 
              return SHIFT(p_5, (k_124, ks_258, k_125) => {
                const tmp_52 = $effekt.println("destination address required");
                return () => k_125(tmp_52, ks_258);
              }, ks_230, undefined);
            case 29: 
              return SHIFT(p_5, (k_126, ks_259, k_127) => {
                const tmp_53 = $effekt.println("file already exists");
                return () => k_127(tmp_53, ks_259);
              }, ks_230, undefined);
            case 30: 
              return SHIFT(p_5, (k_128, ks_260, k_129) => {
                const tmp_54 = $effekt.println("bad address in system call argument");
                return () => k_129(tmp_54, ks_260);
              }, ks_230, undefined);
            case 31: 
              return SHIFT(p_5, (k_130, ks_261, k_131) => {
                const tmp_55 = $effekt.println("file too large");
                return () => k_131(tmp_55, ks_261);
              }, ks_230, undefined);
            case 32: 
              return SHIFT(p_5, (k_132, ks_262, k_133) => {
                const tmp_56 = $effekt.println("host is unreachable");
                return () => k_133(tmp_56, ks_262);
              }, ks_230, undefined);
            case 33: 
              return SHIFT(p_5, (k_134, ks_263, k_135) => {
                const tmp_57 = $effekt.println("interrupted system call");
                return () => k_135(tmp_57, ks_263);
              }, ks_230, undefined);
            case 34: 
              return SHIFT(p_5, (k_136, ks_264, k_137) => {
                const tmp_58 = $effekt.println("invalid argument");
                return () => k_137(tmp_58, ks_264);
              }, ks_230, undefined);
            case 35: 
              return SHIFT(p_5, (k_138, ks_265, k_139) => {
                const tmp_59 = $effekt.println("i/o error");
                return () => k_139(tmp_59, ks_265);
              }, ks_230, undefined);
            case 36: 
              return SHIFT(p_5, (k_140, ks_266, k_141) => {
                const tmp_60 = $effekt.println("socket is already connected");
                return () => k_141(tmp_60, ks_266);
              }, ks_230, undefined);
            case 37: 
              return SHIFT(p_5, (k_142, ks_267, k_143) => {
                const tmp_61 = $effekt.println("illegal operation on a directory");
                return () => k_143(tmp_61, ks_267);
              }, ks_230, undefined);
            case 38: 
              return SHIFT(p_5, (k_144, ks_268, k_145) => {
                const tmp_62 = $effekt.println("too many symbolic links encountered");
                return () => k_145(tmp_62, ks_268);
              }, ks_230, undefined);
            case 39: 
              return SHIFT(p_5, (k_146, ks_269, k_147) => {
                const tmp_63 = $effekt.println("too many open files");
                return () => k_147(tmp_63, ks_269);
              }, ks_230, undefined);
            case 40: 
              return SHIFT(p_5, (k_148, ks_270, k_149) => {
                const tmp_64 = $effekt.println("message too long");
                return () => k_149(tmp_64, ks_270);
              }, ks_230, undefined);
            case 41: 
              return SHIFT(p_5, (k_150, ks_271, k_151) => {
                const tmp_65 = $effekt.println("name too long");
                return () => k_151(tmp_65, ks_271);
              }, ks_230, undefined);
            case 42: 
              return SHIFT(p_5, (k_152, ks_272, k_153) => {
                const tmp_66 = $effekt.println("network is down");
                return () => k_153(tmp_66, ks_272);
              }, ks_230, undefined);
            case 43: 
              return SHIFT(p_5, (k_154, ks_273, k_155) => {
                const tmp_67 = $effekt.println("network is unreachable");
                return () => k_155(tmp_67, ks_273);
              }, ks_230, undefined);
            case 44: 
              return SHIFT(p_5, (k_156, ks_274, k_157) => {
                const tmp_68 = $effekt.println("file table overflow");
                return () => k_157(tmp_68, ks_274);
              }, ks_230, undefined);
            case 45: 
              return SHIFT(p_5, (k_158, ks_275, k_159) => {
                const tmp_69 = $effekt.println("no buffer space available");
                return () => k_159(tmp_69, ks_275);
              }, ks_230, undefined);
            case 46: 
              return SHIFT(p_5, (k_160, ks_276, k_161) => {
                const tmp_70 = $effekt.println("no such device");
                return () => k_161(tmp_70, ks_276);
              }, ks_230, undefined);
            case 47: 
              return SHIFT(p_5, (k_162, ks_277, k_163) => {
                const tmp_71 = $effekt.println("no such file or directory");
                return () => k_163(tmp_71, ks_277);
              }, ks_230, undefined);
            case 48: 
              return SHIFT(p_5, (k_164, ks_278, k_165) => {
                const tmp_72 = $effekt.println("not enough memory");
                return () => k_165(tmp_72, ks_278);
              }, ks_230, undefined);
            case 49: 
              return SHIFT(p_5, (k_166, ks_279, k_167) => {
                const tmp_73 = $effekt.println("machine is not on the network");
                return () => k_167(tmp_73, ks_279);
              }, ks_230, undefined);
            case 50: 
              return SHIFT(p_5, (k_168, ks_280, k_169) => {
                const tmp_74 = $effekt.println("protocol not available");
                return () => k_169(tmp_74, ks_280);
              }, ks_230, undefined);
            case 51: 
              return SHIFT(p_5, (k_170, ks_281, k_171) => {
                const tmp_75 = $effekt.println("no space left on device");
                return () => k_171(tmp_75, ks_281);
              }, ks_230, undefined);
            case 52: 
              return SHIFT(p_5, (k_172, ks_282, k_173) => {
                const tmp_76 = $effekt.println("socket is not connected");
                return () => k_173(tmp_76, ks_282);
              }, ks_230, undefined);
            case 53: 
              return SHIFT(p_5, (k_174, ks_283, k_175) => {
                const tmp_77 = $effekt.println("not a directory");
                return () => k_175(tmp_77, ks_283);
              }, ks_230, undefined);
            case 54: 
              return SHIFT(p_5, (k_176, ks_284, k_177) => {
                const tmp_78 = $effekt.println("socket operation on non-socket");
                return () => k_177(tmp_78, ks_284);
              }, ks_230, undefined);
            case 55: 
              return SHIFT(p_5, (k_178, ks_285, k_179) => {
                const tmp_79 = $effekt.println("operation not supported on socket");
                return () => k_179(tmp_79, ks_285);
              }, ks_230, undefined);
            case 56: 
              return SHIFT(p_5, (k_180, ks_286, k_181) => {
                const tmp_80 = $effekt.println("value too large for defined data type");
                return () => k_181(tmp_80, ks_286);
              }, ks_230, undefined);
            case 57: 
              return SHIFT(p_5, (k_182, ks_287, k_183) => {
                const tmp_81 = $effekt.println("operation not permitted");
                return () => k_183(tmp_81, ks_287);
              }, ks_230, undefined);
            case 58: 
              return SHIFT(p_5, (k_184, ks_288, k_185) => {
                const tmp_82 = $effekt.println("broken pipe");
                return () => k_185(tmp_82, ks_288);
              }, ks_230, undefined);
            case 59: 
              return SHIFT(p_5, (k_186, ks_289, k_187) => {
                const tmp_83 = $effekt.println("protocol not supported");
                return () => k_187(tmp_83, ks_289);
              }, ks_230, undefined);
            case 60: 
              return SHIFT(p_5, (k_188, ks_290, k_189) => {
                const tmp_84 = $effekt.println("protocol wrong type for socket");
                return () => k_189(tmp_84, ks_290);
              }, ks_230, undefined);
            case 61: 
              return SHIFT(p_5, (k_190, ks_291, k_191) => {
                const tmp_85 = $effekt.println("result too large");
                return () => k_191(tmp_85, ks_291);
              }, ks_230, undefined);
            case 62: 
              return SHIFT(p_5, (k_192, ks_292, k_193) => {
                const tmp_86 = $effekt.println("read-only file system");
                return () => k_193(tmp_86, ks_292);
              }, ks_230, undefined);
            case 63: 
              return SHIFT(p_5, (k_194, ks_293, k_195) => {
                const tmp_87 = $effekt.println("cannot send after transport endpoint shutdown");
                return () => k_195(tmp_87, ks_293);
              }, ks_230, undefined);
            case 64: 
              return SHIFT(p_5, (k_196, ks_294, k_197) => {
                const tmp_88 = $effekt.println("invalid seek");
                return () => k_197(tmp_88, ks_294);
              }, ks_230, undefined);
            case 65: 
              return SHIFT(p_5, (k_198, ks_295, k_199) => {
                const tmp_89 = $effekt.println("no such process");
                return () => k_199(tmp_89, ks_295);
              }, ks_230, undefined);
            case 66: 
              return SHIFT(p_5, (k_200, ks_296, k_201) => {
                const tmp_90 = $effekt.println("connection timed out");
                return () => k_201(tmp_90, ks_296);
              }, ks_230, undefined);
            case 67: 
              return SHIFT(p_5, (k_202, ks_297, k_203) => {
                const tmp_91 = $effekt.println("text file is busy");
                return () => k_203(tmp_91, ks_297);
              }, ks_230, undefined);
            case 68: 
              return SHIFT(p_5, (k_204, ks_298, k_205) => {
                const tmp_92 = $effekt.println("cross-device link not permitted");
                return () => k_205(tmp_92, ks_298);
              }, ks_230, undefined);
            case 69: 
              return SHIFT(p_5, (k_206, ks_299, k_207) => {
                const tmp_93 = $effekt.println("unknown error");
                return () => k_207(tmp_93, ks_299);
              }, ks_230, undefined);
            case 70: 
              return SHIFT(p_5, (k_208, ks_300, k_209) => {
                const tmp_94 = $effekt.println("end of file");
                return () => k_209(tmp_94, ks_300);
              }, ks_230, undefined);
            case 71: 
              return SHIFT(p_5, (k_210, ks_301, k_211) => {
                const tmp_95 = $effekt.println("no such device or address");
                return () => k_211(tmp_95, ks_301);
              }, ks_230, undefined);
            case 72: 
              return SHIFT(p_5, (k_212, ks_302, k_213) => {
                const tmp_96 = $effekt.println("too many links");
                return () => k_213(tmp_96, ks_302);
              }, ks_230, undefined);
            case 73: 
              return SHIFT(p_5, (k_214, ks_303, k_215) => {
                const tmp_97 = $effekt.println("inappropriate ioctl for device");
                return () => k_215(tmp_97, ks_303);
              }, ks_230, undefined);
            case 74: 
              return SHIFT(p_5, (k_216, ks_304, k_217) => {
                const tmp_98 = $effekt.println("inappropriate file type or format");
                return () => k_217(tmp_98, ks_304);
              }, ks_230, undefined);
            case 75: 
              return SHIFT(p_5, (k_218, ks_305, k_219) => {
                const tmp_99 = $effekt.println("illegal byte sequence");
                return () => k_219(tmp_99, ks_305);
              }, ks_230, undefined);
            case 76: 
              return SHIFT(p_5, (k_220, ks_306, k_221) => {
                const tmp_100 = $effekt.println("socket type not supported");
                return () => k_221(tmp_100, ks_306);
              }, ks_230, undefined);
            case 77: 
              return SHIFT(p_5, (k_222, ks_307, k_223) => {
                const tmp_101 = $effekt.println("protocol driver not attached");
                return () => k_223(tmp_101, ks_307);
              }, ks_230, undefined);
          }
        }
        if (tmp_23 === (1)) {
          return l_21(new EPERM_0(), ks_228, undefined);
        } else if (tmp_23 === (2)) {
          return l_21(new ENOENT_0(), ks_228, undefined);
        } else if (tmp_23 === (3)) {
          return l_21(new ESRCH_0(), ks_228, undefined);
        } else if (tmp_23 === (4)) {
          return l_21(new EINTR_0(), ks_228, undefined);
        } else if (tmp_23 === (5)) {
          return l_21(new EIO_0(), ks_228, undefined);
        } else if (tmp_23 === (6)) {
          return l_21(new ENXIO_0(), ks_228, undefined);
        } else if (tmp_23 === (7)) {
          return l_21(new E_0(), ks_228, undefined);
        } else if (tmp_23 === (9)) {
          return l_21(new EBADF_0(), ks_228, undefined);
        } else if (tmp_23 === (11)) {
          return l_21(new EAGAIN_0(), ks_228, undefined);
        } else if (tmp_23 === (12)) {
          return l_21(new ENOMEM_0(), ks_228, undefined);
        } else if (tmp_23 === (13)) {
          return l_21(new EACCES_0(), ks_228, undefined);
        } else if (tmp_23 === (14)) {
          return l_21(new EFAULT_0(), ks_228, undefined);
        } else if (tmp_23 === (16)) {
          return l_21(new EBUSY_0(), ks_228, undefined);
        } else if (tmp_23 === (17)) {
          return l_21(new EEXIST_0(), ks_228, undefined);
        } else if (tmp_23 === (18)) {
          return l_21(new EXDEV_0(), ks_228, undefined);
        } else if (tmp_23 === (19)) {
          return l_21(new ENODEV_0(), ks_228, undefined);
        } else if (tmp_23 === (20)) {
          return l_21(new ENOTDIR_0(), ks_228, undefined);
        } else if (tmp_23 === (21)) {
          return l_21(new EISDIR_0(), ks_228, undefined);
        } else if (tmp_23 === (22)) {
          return l_21(new EINVAL_0(), ks_228, undefined);
        } else if (tmp_23 === (23)) {
          return l_21(new ENFILE_0(), ks_228, undefined);
        } else if (tmp_23 === (24)) {
          return l_21(new EMFILE_0(), ks_228, undefined);
        } else if (tmp_23 === (25)) {
          return l_21(new ENOTTY_0(), ks_228, undefined);
        } else if (tmp_23 === (26)) {
          return l_21(new ETXTBSY_0(), ks_228, undefined);
        } else if (tmp_23 === (27)) {
          return l_21(new EFBIG_0(), ks_228, undefined);
        } else if (tmp_23 === (28)) {
          return l_21(new ENOSPC_0(), ks_228, undefined);
        } else if (tmp_23 === (29)) {
          return l_21(new ESPIPE_0(), ks_228, undefined);
        } else if (tmp_23 === (30)) {
          return l_21(new EROFS_0(), ks_228, undefined);
        } else if (tmp_23 === (31)) {
          return l_21(new EMLINK_0(), ks_228, undefined);
        } else if (tmp_23 === (32)) {
          return l_21(new EPIPE_0(), ks_228, undefined);
        } else if (tmp_23 === (34)) {
          return l_21(new ERANGE_0(), ks_228, undefined);
        } else if (tmp_23 === (36)) {
          return l_21(new ENAMETOOLONG_0(), ks_228, undefined);
        } else if (tmp_23 === (40)) {
          return l_21(new ELOOP_0(), ks_228, undefined);
        } else if (tmp_23 === (75)) {
          return l_21(new EOVERFLOW_0(), ks_228, undefined);
        } else if (tmp_23 === (79)) {
          return l_21(new EFTYPE_0(), ks_228, undefined);
        } else if (tmp_23 === (84)) {
          return l_21(new EILSEQ_0(), ks_228, undefined);
        } else if (tmp_23 === (88)) {
          return l_21(new ENOTSOCK_0(), ks_228, undefined);
        } else if (tmp_23 === (89)) {
          return l_21(new EDESTADDRREQ_0(), ks_228, undefined);
        } else if (tmp_23 === (90)) {
          return l_21(new EMSGSIZE_0(), ks_228, undefined);
        } else if (tmp_23 === (91)) {
          return l_21(new EPROTOTYPE_0(), ks_228, undefined);
        } else if (tmp_23 === (92)) {
          return l_21(new ENOPROTOOPT_0(), ks_228, undefined);
        } else if (tmp_23 === (93)) {
          return l_21(new EPROTONOSUPPORT_0(), ks_228, undefined);
        } else if (tmp_23 === (94)) {
          return l_21(new ESOCKTNOSUPPORT_0(), ks_228, undefined);
        } else if (tmp_23 === (95)) {
          return l_21(new ENOTSUP_0(), ks_228, undefined);
        } else if (tmp_23 === (97)) {
          return l_21(new EAFNOSUPPORT_0(), ks_228, undefined);
        } else if (tmp_23 === (98)) {
          return l_21(new EADDRINUSE_0(), ks_228, undefined);
        } else if (tmp_23 === (99)) {
          return l_21(new EADDRNOTAVAIL_0(), ks_228, undefined);
        } else if (tmp_23 === (100)) {
          return l_21(new ENETDOWN_0(), ks_228, undefined);
        } else if (tmp_23 === (101)) {
          return l_21(new ENETUNREACH_0(), ks_228, undefined);
        } else if (tmp_23 === (103)) {
          return l_21(new ECONNABORTED_0(), ks_228, undefined);
        } else if (tmp_23 === (104)) {
          return l_21(new ECONNRESET_0(), ks_228, undefined);
        } else if (tmp_23 === (105)) {
          return l_21(new ENOBUFS_0(), ks_228, undefined);
        } else if (tmp_23 === (106)) {
          return l_21(new EISCONN_0(), ks_228, undefined);
        } else if (tmp_23 === (107)) {
          return l_21(new ENOTCONN_0(), ks_228, undefined);
        } else if (tmp_23 === (110)) {
          return l_21(new ETIMEDOUT_0(), ks_228, undefined);
        } else if (tmp_23 === (111)) {
          return l_21(new ECONNREFUSED_0(), ks_228, undefined);
        } else if (tmp_23 === (113)) {
          return l_21(new EHOSTUNREACH_0(), ks_228, undefined);
        } else if (tmp_23 === (114)) {
          return l_21(new EALREADY_0(), ks_228, undefined);
        } else if (tmp_23 === (125)) {
          return l_21(new ECANCELED_0(), ks_228, undefined);
        } else if (tmp_23 === (200)) {
          return l_21(new EAI_ADDRFAMILY_0(), ks_228, undefined);
        } else if (tmp_23 === (201)) {
          return l_21(new EAI_AGAIN_0(), ks_228, undefined);
        } else if (tmp_23 === (202)) {
          return l_21(new EAI_BADFLAGS_0(), ks_228, undefined);
        } else if (tmp_23 === (203)) {
          return l_21(new EAI_BADHINTS_0(), ks_228, undefined);
        } else if (tmp_23 === (204)) {
          return l_21(new EAI_CANCELED_0(), ks_228, undefined);
        } else if (tmp_23 === (205)) {
          return l_21(new EAI_FAIL_0(), ks_228, undefined);
        } else if (tmp_23 === (206)) {
          return l_21(new EAI_FAMILY_0(), ks_228, undefined);
        } else if (tmp_23 === (207)) {
          return l_21(new EAI_MEMORY_0(), ks_228, undefined);
        } else if (tmp_23 === (208)) {
          return l_21(new EAI_NODATA_0(), ks_228, undefined);
        } else if (tmp_23 === (209)) {
          return l_21(new EAI_NONAME_0(), ks_228, undefined);
        } else if (tmp_23 === (210)) {
          return l_21(new EAI_OVERFLOW_0(), ks_228, undefined);
        } else if (tmp_23 === (211)) {
          return l_21(new EAI_PROTOCOL_0(), ks_228, undefined);
        } else if (tmp_23 === (212)) {
          return l_21(new EAI_SERVICE_0(), ks_228, undefined);
        } else if (tmp_23 === (213)) {
          return l_21(new EAI_SOCKTYPE_0(), ks_228, undefined);
        } else if (tmp_23 === (215)) {
          return l_21(new ECHARSET_0(), ks_228, undefined);
        } else if (tmp_23 === (216)) {
          return l_21(new ENONET_0(), ks_228, undefined);
        } else if (tmp_23 === (217)) {
          return l_21(new UNKNOWN_0(), ks_228, undefined);
        } else if (tmp_23 === (218)) {
          return l_21(new EOF_0(), ks_228, undefined);
        } else if (tmp_23 === (219)) {
          return l_21(new EUNATCH_0(), ks_228, undefined);
        } else if (tmp_23 === (220)) {
          return l_21(new ESHUTDOWN_0(), ks_228, undefined);
        } else {
          const tmp_102 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_23)))) })();
          file_3 = tmp_102;
        }
      } else {
        file_3 = v_r_52;
      }
      function b_blockBinding_0(ks_308, k_382) {
        return close_0(file_3, ks_308, (v_r_53, ks_309) => {
          if ((v_r_53 < (0))) {
            const tmp_103 = errorNumber(v_r_53);
            function l_22(ioError_1, ks_311, k_381) {
              switch (ioError_1.__tag) {
                case 0: 
                  return SHIFT(p_5, (k_225, ks_310, k_226) => {
                    const tmp_104 = $effekt.println("argument list too long");
                    return () => k_226(tmp_104, ks_310);
                  }, ks_311, undefined);
                case 1: 
                  return SHIFT(p_5, (k_227, ks_312, k_228) => {
                    const tmp_105 = $effekt.println("permission denied");
                    return () => k_228(tmp_105, ks_312);
                  }, ks_311, undefined);
                case 2: 
                  return SHIFT(p_5, (k_229, ks_313, k_230) => {
                    const tmp_106 = $effekt.println("address already in use");
                    return () => k_230(tmp_106, ks_313);
                  }, ks_311, undefined);
                case 3: 
                  return SHIFT(p_5, (k_231, ks_314, k_232) => {
                    const tmp_107 = $effekt.println("address not available");
                    return () => k_232(tmp_107, ks_314);
                  }, ks_311, undefined);
                case 4: 
                  return SHIFT(p_5, (k_233, ks_315, k_234) => {
                    const tmp_108 = $effekt.println("address family not supported");
                    return () => k_234(tmp_108, ks_315);
                  }, ks_311, undefined);
                case 5: 
                  return SHIFT(p_5, (k_235, ks_316, k_236) => {
                    const tmp_109 = $effekt.println("resource temporarily unavailable");
                    return () => k_236(tmp_109, ks_316);
                  }, ks_311, undefined);
                case 6: 
                  return SHIFT(p_5, (k_237, ks_317, k_238) => {
                    const tmp_110 = $effekt.println("address family not supported");
                    return () => k_238(tmp_110, ks_317);
                  }, ks_311, undefined);
                case 7: 
                  return SHIFT(p_5, (k_239, ks_318, k_240) => {
                    const tmp_111 = $effekt.println("temporary failure");
                    return () => k_240(tmp_111, ks_318);
                  }, ks_311, undefined);
                case 8: 
                  return SHIFT(p_5, (k_241, ks_319, k_242) => {
                    const tmp_112 = $effekt.println("bad ai_flags value");
                    return () => k_242(tmp_112, ks_319);
                  }, ks_311, undefined);
                case 9: 
                  return SHIFT(p_5, (k_243, ks_320, k_244) => {
                    const tmp_113 = $effekt.println("invalid value for hints");
                    return () => k_244(tmp_113, ks_320);
                  }, ks_311, undefined);
                case 10: 
                  return SHIFT(p_5, (k_245, ks_321, k_246) => {
                    const tmp_114 = $effekt.println("request canceled");
                    return () => k_246(tmp_114, ks_321);
                  }, ks_311, undefined);
                case 11: 
                  return SHIFT(p_5, (k_247, ks_322, k_248) => {
                    const tmp_115 = $effekt.println("permanent failure");
                    return () => k_248(tmp_115, ks_322);
                  }, ks_311, undefined);
                case 12: 
                  return SHIFT(p_5, (k_249, ks_323, k_250) => {
                    const tmp_116 = $effekt.println("ai_family not supported");
                    return () => k_250(tmp_116, ks_323);
                  }, ks_311, undefined);
                case 13: 
                  return SHIFT(p_5, (k_251, ks_324, k_252) => {
                    const tmp_117 = $effekt.println("out of memory");
                    return () => k_252(tmp_117, ks_324);
                  }, ks_311, undefined);
                case 14: 
                  return SHIFT(p_5, (k_253, ks_325, k_254) => {
                    const tmp_118 = $effekt.println("no address");
                    return () => k_254(tmp_118, ks_325);
                  }, ks_311, undefined);
                case 15: 
                  return SHIFT(p_5, (k_255, ks_326, k_256) => {
                    const tmp_119 = $effekt.println("unknown node or service");
                    return () => k_256(tmp_119, ks_326);
                  }, ks_311, undefined);
                case 16: 
                  return SHIFT(p_5, (k_257, ks_327, k_258) => {
                    const tmp_120 = $effekt.println("argument buffer overflow");
                    return () => k_258(tmp_120, ks_327);
                  }, ks_311, undefined);
                case 17: 
                  return SHIFT(p_5, (k_259, ks_328, k_260) => {
                    const tmp_121 = $effekt.println("resolved protocol is unknown");
                    return () => k_260(tmp_121, ks_328);
                  }, ks_311, undefined);
                case 18: 
                  return SHIFT(p_5, (k_261, ks_329, k_262) => {
                    const tmp_122 = $effekt.println("service not available for socket type");
                    return () => k_262(tmp_122, ks_329);
                  }, ks_311, undefined);
                case 19: 
                  return SHIFT(p_5, (k_263, ks_330, k_264) => {
                    const tmp_123 = $effekt.println("socket type not supported");
                    return () => k_264(tmp_123, ks_330);
                  }, ks_311, undefined);
                case 20: 
                  return SHIFT(p_5, (k_265, ks_331, k_266) => {
                    const tmp_124 = $effekt.println("connection already in progress");
                    return () => k_266(tmp_124, ks_331);
                  }, ks_311, undefined);
                case 21: 
                  return SHIFT(p_5, (k_267, ks_332, k_268) => {
                    const tmp_125 = $effekt.println("bad file descriptor");
                    return () => k_268(tmp_125, ks_332);
                  }, ks_311, undefined);
                case 22: 
                  return SHIFT(p_5, (k_269, ks_333, k_270) => {
                    const tmp_126 = $effekt.println("resource busy or locked");
                    return () => k_270(tmp_126, ks_333);
                  }, ks_311, undefined);
                case 23: 
                  return SHIFT(p_5, (k_271, ks_334, k_272) => {
                    const tmp_127 = $effekt.println("operation canceled");
                    return () => k_272(tmp_127, ks_334);
                  }, ks_311, undefined);
                case 24: 
                  return SHIFT(p_5, (k_273, ks_335, k_274) => {
                    const tmp_128 = $effekt.println("invalid Unicode character");
                    return () => k_274(tmp_128, ks_335);
                  }, ks_311, undefined);
                case 25: 
                  return SHIFT(p_5, (k_275, ks_336, k_276) => {
                    const tmp_129 = $effekt.println("software caused connection abort");
                    return () => k_276(tmp_129, ks_336);
                  }, ks_311, undefined);
                case 26: 
                  return SHIFT(p_5, (k_277, ks_337, k_278) => {
                    const tmp_130 = $effekt.println("connection refused");
                    return () => k_278(tmp_130, ks_337);
                  }, ks_311, undefined);
                case 27: 
                  return SHIFT(p_5, (k_279, ks_338, k_280) => {
                    const tmp_131 = $effekt.println("connection reset by peer");
                    return () => k_280(tmp_131, ks_338);
                  }, ks_311, undefined);
                case 28: 
                  return SHIFT(p_5, (k_281, ks_339, k_282) => {
                    const tmp_132 = $effekt.println("destination address required");
                    return () => k_282(tmp_132, ks_339);
                  }, ks_311, undefined);
                case 29: 
                  return SHIFT(p_5, (k_283, ks_340, k_284) => {
                    const tmp_133 = $effekt.println("file already exists");
                    return () => k_284(tmp_133, ks_340);
                  }, ks_311, undefined);
                case 30: 
                  return SHIFT(p_5, (k_285, ks_341, k_286) => {
                    const tmp_134 = $effekt.println("bad address in system call argument");
                    return () => k_286(tmp_134, ks_341);
                  }, ks_311, undefined);
                case 31: 
                  return SHIFT(p_5, (k_287, ks_342, k_288) => {
                    const tmp_135 = $effekt.println("file too large");
                    return () => k_288(tmp_135, ks_342);
                  }, ks_311, undefined);
                case 32: 
                  return SHIFT(p_5, (k_289, ks_343, k_290) => {
                    const tmp_136 = $effekt.println("host is unreachable");
                    return () => k_290(tmp_136, ks_343);
                  }, ks_311, undefined);
                case 33: 
                  return SHIFT(p_5, (k_291, ks_344, k_292) => {
                    const tmp_137 = $effekt.println("interrupted system call");
                    return () => k_292(tmp_137, ks_344);
                  }, ks_311, undefined);
                case 34: 
                  return SHIFT(p_5, (k_293, ks_345, k_294) => {
                    const tmp_138 = $effekt.println("invalid argument");
                    return () => k_294(tmp_138, ks_345);
                  }, ks_311, undefined);
                case 35: 
                  return SHIFT(p_5, (k_295, ks_346, k_296) => {
                    const tmp_139 = $effekt.println("i/o error");
                    return () => k_296(tmp_139, ks_346);
                  }, ks_311, undefined);
                case 36: 
                  return SHIFT(p_5, (k_297, ks_347, k_298) => {
                    const tmp_140 = $effekt.println("socket is already connected");
                    return () => k_298(tmp_140, ks_347);
                  }, ks_311, undefined);
                case 37: 
                  return SHIFT(p_5, (k_299, ks_348, k_300) => {
                    const tmp_141 = $effekt.println("illegal operation on a directory");
                    return () => k_300(tmp_141, ks_348);
                  }, ks_311, undefined);
                case 38: 
                  return SHIFT(p_5, (k_301, ks_349, k_302) => {
                    const tmp_142 = $effekt.println("too many symbolic links encountered");
                    return () => k_302(tmp_142, ks_349);
                  }, ks_311, undefined);
                case 39: 
                  return SHIFT(p_5, (k_303, ks_350, k_304) => {
                    const tmp_143 = $effekt.println("too many open files");
                    return () => k_304(tmp_143, ks_350);
                  }, ks_311, undefined);
                case 40: 
                  return SHIFT(p_5, (k_305, ks_351, k_306) => {
                    const tmp_144 = $effekt.println("message too long");
                    return () => k_306(tmp_144, ks_351);
                  }, ks_311, undefined);
                case 41: 
                  return SHIFT(p_5, (k_307, ks_352, k_308) => {
                    const tmp_145 = $effekt.println("name too long");
                    return () => k_308(tmp_145, ks_352);
                  }, ks_311, undefined);
                case 42: 
                  return SHIFT(p_5, (k_309, ks_353, k_310) => {
                    const tmp_146 = $effekt.println("network is down");
                    return () => k_310(tmp_146, ks_353);
                  }, ks_311, undefined);
                case 43: 
                  return SHIFT(p_5, (k_311, ks_354, k_312) => {
                    const tmp_147 = $effekt.println("network is unreachable");
                    return () => k_312(tmp_147, ks_354);
                  }, ks_311, undefined);
                case 44: 
                  return SHIFT(p_5, (k_313, ks_355, k_314) => {
                    const tmp_148 = $effekt.println("file table overflow");
                    return () => k_314(tmp_148, ks_355);
                  }, ks_311, undefined);
                case 45: 
                  return SHIFT(p_5, (k_315, ks_356, k_316) => {
                    const tmp_149 = $effekt.println("no buffer space available");
                    return () => k_316(tmp_149, ks_356);
                  }, ks_311, undefined);
                case 46: 
                  return SHIFT(p_5, (k_317, ks_357, k_318) => {
                    const tmp_150 = $effekt.println("no such device");
                    return () => k_318(tmp_150, ks_357);
                  }, ks_311, undefined);
                case 47: 
                  return SHIFT(p_5, (k_319, ks_358, k_320) => {
                    const tmp_151 = $effekt.println("no such file or directory");
                    return () => k_320(tmp_151, ks_358);
                  }, ks_311, undefined);
                case 48: 
                  return SHIFT(p_5, (k_321, ks_359, k_322) => {
                    const tmp_152 = $effekt.println("not enough memory");
                    return () => k_322(tmp_152, ks_359);
                  }, ks_311, undefined);
                case 49: 
                  return SHIFT(p_5, (k_323, ks_360, k_324) => {
                    const tmp_153 = $effekt.println("machine is not on the network");
                    return () => k_324(tmp_153, ks_360);
                  }, ks_311, undefined);
                case 50: 
                  return SHIFT(p_5, (k_325, ks_361, k_326) => {
                    const tmp_154 = $effekt.println("protocol not available");
                    return () => k_326(tmp_154, ks_361);
                  }, ks_311, undefined);
                case 51: 
                  return SHIFT(p_5, (k_327, ks_362, k_328) => {
                    const tmp_155 = $effekt.println("no space left on device");
                    return () => k_328(tmp_155, ks_362);
                  }, ks_311, undefined);
                case 52: 
                  return SHIFT(p_5, (k_329, ks_363, k_330) => {
                    const tmp_156 = $effekt.println("socket is not connected");
                    return () => k_330(tmp_156, ks_363);
                  }, ks_311, undefined);
                case 53: 
                  return SHIFT(p_5, (k_331, ks_364, k_332) => {
                    const tmp_157 = $effekt.println("not a directory");
                    return () => k_332(tmp_157, ks_364);
                  }, ks_311, undefined);
                case 54: 
                  return SHIFT(p_5, (k_333, ks_365, k_334) => {
                    const tmp_158 = $effekt.println("socket operation on non-socket");
                    return () => k_334(tmp_158, ks_365);
                  }, ks_311, undefined);
                case 55: 
                  return SHIFT(p_5, (k_335, ks_366, k_336) => {
                    const tmp_159 = $effekt.println("operation not supported on socket");
                    return () => k_336(tmp_159, ks_366);
                  }, ks_311, undefined);
                case 56: 
                  return SHIFT(p_5, (k_337, ks_367, k_338) => {
                    const tmp_160 = $effekt.println("value too large for defined data type");
                    return () => k_338(tmp_160, ks_367);
                  }, ks_311, undefined);
                case 57: 
                  return SHIFT(p_5, (k_339, ks_368, k_340) => {
                    const tmp_161 = $effekt.println("operation not permitted");
                    return () => k_340(tmp_161, ks_368);
                  }, ks_311, undefined);
                case 58: 
                  return SHIFT(p_5, (k_341, ks_369, k_342) => {
                    const tmp_162 = $effekt.println("broken pipe");
                    return () => k_342(tmp_162, ks_369);
                  }, ks_311, undefined);
                case 59: 
                  return SHIFT(p_5, (k_343, ks_370, k_344) => {
                    const tmp_163 = $effekt.println("protocol not supported");
                    return () => k_344(tmp_163, ks_370);
                  }, ks_311, undefined);
                case 60: 
                  return SHIFT(p_5, (k_345, ks_371, k_346) => {
                    const tmp_164 = $effekt.println("protocol wrong type for socket");
                    return () => k_346(tmp_164, ks_371);
                  }, ks_311, undefined);
                case 61: 
                  return SHIFT(p_5, (k_347, ks_372, k_348) => {
                    const tmp_165 = $effekt.println("result too large");
                    return () => k_348(tmp_165, ks_372);
                  }, ks_311, undefined);
                case 62: 
                  return SHIFT(p_5, (k_349, ks_373, k_350) => {
                    const tmp_166 = $effekt.println("read-only file system");
                    return () => k_350(tmp_166, ks_373);
                  }, ks_311, undefined);
                case 63: 
                  return SHIFT(p_5, (k_351, ks_374, k_352) => {
                    const tmp_167 = $effekt.println("cannot send after transport endpoint shutdown");
                    return () => k_352(tmp_167, ks_374);
                  }, ks_311, undefined);
                case 64: 
                  return SHIFT(p_5, (k_353, ks_375, k_354) => {
                    const tmp_168 = $effekt.println("invalid seek");
                    return () => k_354(tmp_168, ks_375);
                  }, ks_311, undefined);
                case 65: 
                  return SHIFT(p_5, (k_355, ks_376, k_356) => {
                    const tmp_169 = $effekt.println("no such process");
                    return () => k_356(tmp_169, ks_376);
                  }, ks_311, undefined);
                case 66: 
                  return SHIFT(p_5, (k_357, ks_377, k_358) => {
                    const tmp_170 = $effekt.println("connection timed out");
                    return () => k_358(tmp_170, ks_377);
                  }, ks_311, undefined);
                case 67: 
                  return SHIFT(p_5, (k_359, ks_378, k_360) => {
                    const tmp_171 = $effekt.println("text file is busy");
                    return () => k_360(tmp_171, ks_378);
                  }, ks_311, undefined);
                case 68: 
                  return SHIFT(p_5, (k_361, ks_379, k_362) => {
                    const tmp_172 = $effekt.println("cross-device link not permitted");
                    return () => k_362(tmp_172, ks_379);
                  }, ks_311, undefined);
                case 69: 
                  return SHIFT(p_5, (k_363, ks_380, k_364) => {
                    const tmp_173 = $effekt.println("unknown error");
                    return () => k_364(tmp_173, ks_380);
                  }, ks_311, undefined);
                case 70: 
                  return SHIFT(p_5, (k_365, ks_381, k_366) => {
                    const tmp_174 = $effekt.println("end of file");
                    return () => k_366(tmp_174, ks_381);
                  }, ks_311, undefined);
                case 71: 
                  return SHIFT(p_5, (k_367, ks_382, k_368) => {
                    const tmp_175 = $effekt.println("no such device or address");
                    return () => k_368(tmp_175, ks_382);
                  }, ks_311, undefined);
                case 72: 
                  return SHIFT(p_5, (k_369, ks_383, k_370) => {
                    const tmp_176 = $effekt.println("too many links");
                    return () => k_370(tmp_176, ks_383);
                  }, ks_311, undefined);
                case 73: 
                  return SHIFT(p_5, (k_371, ks_384, k_372) => {
                    const tmp_177 = $effekt.println("inappropriate ioctl for device");
                    return () => k_372(tmp_177, ks_384);
                  }, ks_311, undefined);
                case 74: 
                  return SHIFT(p_5, (k_373, ks_385, k_374) => {
                    const tmp_178 = $effekt.println("inappropriate file type or format");
                    return () => k_374(tmp_178, ks_385);
                  }, ks_311, undefined);
                case 75: 
                  return SHIFT(p_5, (k_375, ks_386, k_376) => {
                    const tmp_179 = $effekt.println("illegal byte sequence");
                    return () => k_376(tmp_179, ks_386);
                  }, ks_311, undefined);
                case 76: 
                  return SHIFT(p_5, (k_377, ks_387, k_378) => {
                    const tmp_180 = $effekt.println("socket type not supported");
                    return () => k_378(tmp_180, ks_387);
                  }, ks_311, undefined);
                case 77: 
                  return SHIFT(p_5, (k_379, ks_388, k_380) => {
                    const tmp_181 = $effekt.println("protocol driver not attached");
                    return () => k_380(tmp_181, ks_388);
                  }, ks_311, undefined);
              }
            }
            if (tmp_103 === (1)) {
              return l_22(new EPERM_0(), ks_309, undefined);
            } else if (tmp_103 === (2)) {
              return l_22(new ENOENT_0(), ks_309, undefined);
            } else if (tmp_103 === (3)) {
              return l_22(new ESRCH_0(), ks_309, undefined);
            } else if (tmp_103 === (4)) {
              return l_22(new EINTR_0(), ks_309, undefined);
            } else if (tmp_103 === (5)) {
              return l_22(new EIO_0(), ks_309, undefined);
            } else if (tmp_103 === (6)) {
              return l_22(new ENXIO_0(), ks_309, undefined);
            } else if (tmp_103 === (7)) {
              return l_22(new E_0(), ks_309, undefined);
            } else if (tmp_103 === (9)) {
              return l_22(new EBADF_0(), ks_309, undefined);
            } else if (tmp_103 === (11)) {
              return l_22(new EAGAIN_0(), ks_309, undefined);
            } else if (tmp_103 === (12)) {
              return l_22(new ENOMEM_0(), ks_309, undefined);
            } else if (tmp_103 === (13)) {
              return l_22(new EACCES_0(), ks_309, undefined);
            } else if (tmp_103 === (14)) {
              return l_22(new EFAULT_0(), ks_309, undefined);
            } else if (tmp_103 === (16)) {
              return l_22(new EBUSY_0(), ks_309, undefined);
            } else if (tmp_103 === (17)) {
              return l_22(new EEXIST_0(), ks_309, undefined);
            } else if (tmp_103 === (18)) {
              return l_22(new EXDEV_0(), ks_309, undefined);
            } else if (tmp_103 === (19)) {
              return l_22(new ENODEV_0(), ks_309, undefined);
            } else if (tmp_103 === (20)) {
              return l_22(new ENOTDIR_0(), ks_309, undefined);
            } else if (tmp_103 === (21)) {
              return l_22(new EISDIR_0(), ks_309, undefined);
            } else if (tmp_103 === (22)) {
              return l_22(new EINVAL_0(), ks_309, undefined);
            } else if (tmp_103 === (23)) {
              return l_22(new ENFILE_0(), ks_309, undefined);
            } else if (tmp_103 === (24)) {
              return l_22(new EMFILE_0(), ks_309, undefined);
            } else if (tmp_103 === (25)) {
              return l_22(new ENOTTY_0(), ks_309, undefined);
            } else if (tmp_103 === (26)) {
              return l_22(new ETXTBSY_0(), ks_309, undefined);
            } else if (tmp_103 === (27)) {
              return l_22(new EFBIG_0(), ks_309, undefined);
            } else if (tmp_103 === (28)) {
              return l_22(new ENOSPC_0(), ks_309, undefined);
            } else if (tmp_103 === (29)) {
              return l_22(new ESPIPE_0(), ks_309, undefined);
            } else if (tmp_103 === (30)) {
              return l_22(new EROFS_0(), ks_309, undefined);
            } else if (tmp_103 === (31)) {
              return l_22(new EMLINK_0(), ks_309, undefined);
            } else if (tmp_103 === (32)) {
              return l_22(new EPIPE_0(), ks_309, undefined);
            } else if (tmp_103 === (34)) {
              return l_22(new ERANGE_0(), ks_309, undefined);
            } else if (tmp_103 === (36)) {
              return l_22(new ENAMETOOLONG_0(), ks_309, undefined);
            } else if (tmp_103 === (40)) {
              return l_22(new ELOOP_0(), ks_309, undefined);
            } else if (tmp_103 === (75)) {
              return l_22(new EOVERFLOW_0(), ks_309, undefined);
            } else if (tmp_103 === (79)) {
              return l_22(new EFTYPE_0(), ks_309, undefined);
            } else if (tmp_103 === (84)) {
              return l_22(new EILSEQ_0(), ks_309, undefined);
            } else if (tmp_103 === (88)) {
              return l_22(new ENOTSOCK_0(), ks_309, undefined);
            } else if (tmp_103 === (89)) {
              return l_22(new EDESTADDRREQ_0(), ks_309, undefined);
            } else if (tmp_103 === (90)) {
              return l_22(new EMSGSIZE_0(), ks_309, undefined);
            } else if (tmp_103 === (91)) {
              return l_22(new EPROTOTYPE_0(), ks_309, undefined);
            } else if (tmp_103 === (92)) {
              return l_22(new ENOPROTOOPT_0(), ks_309, undefined);
            } else if (tmp_103 === (93)) {
              return l_22(new EPROTONOSUPPORT_0(), ks_309, undefined);
            } else if (tmp_103 === (94)) {
              return l_22(new ESOCKTNOSUPPORT_0(), ks_309, undefined);
            } else if (tmp_103 === (95)) {
              return l_22(new ENOTSUP_0(), ks_309, undefined);
            } else if (tmp_103 === (97)) {
              return l_22(new EAFNOSUPPORT_0(), ks_309, undefined);
            } else if (tmp_103 === (98)) {
              return l_22(new EADDRINUSE_0(), ks_309, undefined);
            } else if (tmp_103 === (99)) {
              return l_22(new EADDRNOTAVAIL_0(), ks_309, undefined);
            } else if (tmp_103 === (100)) {
              return l_22(new ENETDOWN_0(), ks_309, undefined);
            } else if (tmp_103 === (101)) {
              return l_22(new ENETUNREACH_0(), ks_309, undefined);
            } else if (tmp_103 === (103)) {
              return l_22(new ECONNABORTED_0(), ks_309, undefined);
            } else if (tmp_103 === (104)) {
              return l_22(new ECONNRESET_0(), ks_309, undefined);
            } else if (tmp_103 === (105)) {
              return l_22(new ENOBUFS_0(), ks_309, undefined);
            } else if (tmp_103 === (106)) {
              return l_22(new EISCONN_0(), ks_309, undefined);
            } else if (tmp_103 === (107)) {
              return l_22(new ENOTCONN_0(), ks_309, undefined);
            } else if (tmp_103 === (110)) {
              return l_22(new ETIMEDOUT_0(), ks_309, undefined);
            } else if (tmp_103 === (111)) {
              return l_22(new ECONNREFUSED_0(), ks_309, undefined);
            } else if (tmp_103 === (113)) {
              return l_22(new EHOSTUNREACH_0(), ks_309, undefined);
            } else if (tmp_103 === (114)) {
              return l_22(new EALREADY_0(), ks_309, undefined);
            } else if (tmp_103 === (125)) {
              return l_22(new ECANCELED_0(), ks_309, undefined);
            } else if (tmp_103 === (200)) {
              return l_22(new EAI_ADDRFAMILY_0(), ks_309, undefined);
            } else if (tmp_103 === (201)) {
              return l_22(new EAI_AGAIN_0(), ks_309, undefined);
            } else if (tmp_103 === (202)) {
              return l_22(new EAI_BADFLAGS_0(), ks_309, undefined);
            } else if (tmp_103 === (203)) {
              return l_22(new EAI_BADHINTS_0(), ks_309, undefined);
            } else if (tmp_103 === (204)) {
              return l_22(new EAI_CANCELED_0(), ks_309, undefined);
            } else if (tmp_103 === (205)) {
              return l_22(new EAI_FAIL_0(), ks_309, undefined);
            } else if (tmp_103 === (206)) {
              return l_22(new EAI_FAMILY_0(), ks_309, undefined);
            } else if (tmp_103 === (207)) {
              return l_22(new EAI_MEMORY_0(), ks_309, undefined);
            } else if (tmp_103 === (208)) {
              return l_22(new EAI_NODATA_0(), ks_309, undefined);
            } else if (tmp_103 === (209)) {
              return l_22(new EAI_NONAME_0(), ks_309, undefined);
            } else if (tmp_103 === (210)) {
              return l_22(new EAI_OVERFLOW_0(), ks_309, undefined);
            } else if (tmp_103 === (211)) {
              return l_22(new EAI_PROTOCOL_0(), ks_309, undefined);
            } else if (tmp_103 === (212)) {
              return l_22(new EAI_SERVICE_0(), ks_309, undefined);
            } else if (tmp_103 === (213)) {
              return l_22(new EAI_SOCKTYPE_0(), ks_309, undefined);
            } else if (tmp_103 === (215)) {
              return l_22(new ECHARSET_0(), ks_309, undefined);
            } else if (tmp_103 === (216)) {
              return l_22(new ENONET_0(), ks_309, undefined);
            } else if (tmp_103 === (217)) {
              return l_22(new UNKNOWN_0(), ks_309, undefined);
            } else if (tmp_103 === (218)) {
              return l_22(new EOF_0(), ks_309, undefined);
            } else if (tmp_103 === (219)) {
              return l_22(new EUNATCH_0(), ks_309, undefined);
            } else if (tmp_103 === (220)) {
              return l_22(new ESHUTDOWN_0(), ks_309, undefined);
            } else {
              const tmp_182 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_103)))) })();
              return () => k_382($effekt.unit, ks_309);
            }
          } else {
            return () => k_382($effekt.unit, ks_309);
          }
        });
      }
      const chunkSize_0 = 1048576;
      const tmp_183 = (new Uint8Array(chunkSize_0));
      const buffer_2 = ks_228.arena.fresh(tmp_183);
      const offset_2 = ks_228.arena.fresh(0);
      function go_13(ks_389, k_540) {
        const s_136 = buffer_2.value;
        const s_137 = offset_2.value;
        return read_0(file_3, s_136, s_137, chunkSize_0, -1, ks_389, (v_r_54, ks_390) => {
          let v_r_55 = undefined;
          if ((v_r_54 < (0))) {
            const tmp_184 = errorNumber(v_r_54);
            function l_23(ioError_2, ks_391, k_539) {
              switch (ioError_2.__tag) {
                case 0: 
                  return b_blockBinding_0(ks_391, (_30, ks_392) =>
                    SHIFT(p_5, (k_383, ks_393, k_384) => {
                      const tmp_185 = $effekt.println("argument list too long");
                      return () => k_384(tmp_185, ks_393);
                    }, ks_392, undefined));
                case 1: 
                  return b_blockBinding_0(ks_391, (_31, ks_394) =>
                    SHIFT(p_5, (k_385, ks_395, k_386) => {
                      const tmp_186 = $effekt.println("permission denied");
                      return () => k_386(tmp_186, ks_395);
                    }, ks_394, undefined));
                case 2: 
                  return b_blockBinding_0(ks_391, (_32, ks_396) =>
                    SHIFT(p_5, (k_387, ks_397, k_388) => {
                      const tmp_187 = $effekt.println("address already in use");
                      return () => k_388(tmp_187, ks_397);
                    }, ks_396, undefined));
                case 3: 
                  return b_blockBinding_0(ks_391, (_33, ks_398) =>
                    SHIFT(p_5, (k_389, ks_399, k_390) => {
                      const tmp_188 = $effekt.println("address not available");
                      return () => k_390(tmp_188, ks_399);
                    }, ks_398, undefined));
                case 4: 
                  return b_blockBinding_0(ks_391, (_34, ks_400) =>
                    SHIFT(p_5, (k_391, ks_401, k_392) => {
                      const tmp_189 = $effekt.println("address family not supported");
                      return () => k_392(tmp_189, ks_401);
                    }, ks_400, undefined));
                case 5: 
                  return b_blockBinding_0(ks_391, (_35, ks_402) =>
                    SHIFT(p_5, (k_393, ks_403, k_394) => {
                      const tmp_190 = $effekt.println("resource temporarily unavailable");
                      return () => k_394(tmp_190, ks_403);
                    }, ks_402, undefined));
                case 6: 
                  return b_blockBinding_0(ks_391, (_36, ks_404) =>
                    SHIFT(p_5, (k_395, ks_405, k_396) => {
                      const tmp_191 = $effekt.println("address family not supported");
                      return () => k_396(tmp_191, ks_405);
                    }, ks_404, undefined));
                case 7: 
                  return b_blockBinding_0(ks_391, (_37, ks_406) =>
                    SHIFT(p_5, (k_397, ks_407, k_398) => {
                      const tmp_192 = $effekt.println("temporary failure");
                      return () => k_398(tmp_192, ks_407);
                    }, ks_406, undefined));
                case 8: 
                  return b_blockBinding_0(ks_391, (_38, ks_408) =>
                    SHIFT(p_5, (k_399, ks_409, k_400) => {
                      const tmp_193 = $effekt.println("bad ai_flags value");
                      return () => k_400(tmp_193, ks_409);
                    }, ks_408, undefined));
                case 9: 
                  return b_blockBinding_0(ks_391, (_39, ks_410) =>
                    SHIFT(p_5, (k_401, ks_411, k_402) => {
                      const tmp_194 = $effekt.println("invalid value for hints");
                      return () => k_402(tmp_194, ks_411);
                    }, ks_410, undefined));
                case 10: 
                  return b_blockBinding_0(ks_391, (_40, ks_412) =>
                    SHIFT(p_5, (k_403, ks_413, k_404) => {
                      const tmp_195 = $effekt.println("request canceled");
                      return () => k_404(tmp_195, ks_413);
                    }, ks_412, undefined));
                case 11: 
                  return b_blockBinding_0(ks_391, (_41, ks_414) =>
                    SHIFT(p_5, (k_405, ks_415, k_406) => {
                      const tmp_196 = $effekt.println("permanent failure");
                      return () => k_406(tmp_196, ks_415);
                    }, ks_414, undefined));
                case 12: 
                  return b_blockBinding_0(ks_391, (_42, ks_416) =>
                    SHIFT(p_5, (k_407, ks_417, k_408) => {
                      const tmp_197 = $effekt.println("ai_family not supported");
                      return () => k_408(tmp_197, ks_417);
                    }, ks_416, undefined));
                case 13: 
                  return b_blockBinding_0(ks_391, (_43, ks_418) =>
                    SHIFT(p_5, (k_409, ks_419, k_410) => {
                      const tmp_198 = $effekt.println("out of memory");
                      return () => k_410(tmp_198, ks_419);
                    }, ks_418, undefined));
                case 14: 
                  return b_blockBinding_0(ks_391, (_44, ks_420) =>
                    SHIFT(p_5, (k_411, ks_421, k_412) => {
                      const tmp_199 = $effekt.println("no address");
                      return () => k_412(tmp_199, ks_421);
                    }, ks_420, undefined));
                case 15: 
                  return b_blockBinding_0(ks_391, (_45, ks_422) =>
                    SHIFT(p_5, (k_413, ks_423, k_414) => {
                      const tmp_200 = $effekt.println("unknown node or service");
                      return () => k_414(tmp_200, ks_423);
                    }, ks_422, undefined));
                case 16: 
                  return b_blockBinding_0(ks_391, (_46, ks_424) =>
                    SHIFT(p_5, (k_415, ks_425, k_416) => {
                      const tmp_201 = $effekt.println("argument buffer overflow");
                      return () => k_416(tmp_201, ks_425);
                    }, ks_424, undefined));
                case 17: 
                  return b_blockBinding_0(ks_391, (_47, ks_426) =>
                    SHIFT(p_5, (k_417, ks_427, k_418) => {
                      const tmp_202 = $effekt.println("resolved protocol is unknown");
                      return () => k_418(tmp_202, ks_427);
                    }, ks_426, undefined));
                case 18: 
                  return b_blockBinding_0(ks_391, (_48, ks_428) =>
                    SHIFT(p_5, (k_419, ks_429, k_420) => {
                      const tmp_203 = $effekt.println("service not available for socket type");
                      return () => k_420(tmp_203, ks_429);
                    }, ks_428, undefined));
                case 19: 
                  return b_blockBinding_0(ks_391, (_49, ks_430) =>
                    SHIFT(p_5, (k_421, ks_431, k_422) => {
                      const tmp_204 = $effekt.println("socket type not supported");
                      return () => k_422(tmp_204, ks_431);
                    }, ks_430, undefined));
                case 20: 
                  return b_blockBinding_0(ks_391, (_50, ks_432) =>
                    SHIFT(p_5, (k_423, ks_433, k_424) => {
                      const tmp_205 = $effekt.println("connection already in progress");
                      return () => k_424(tmp_205, ks_433);
                    }, ks_432, undefined));
                case 21: 
                  return b_blockBinding_0(ks_391, (_51, ks_434) =>
                    SHIFT(p_5, (k_425, ks_435, k_426) => {
                      const tmp_206 = $effekt.println("bad file descriptor");
                      return () => k_426(tmp_206, ks_435);
                    }, ks_434, undefined));
                case 22: 
                  return b_blockBinding_0(ks_391, (_52, ks_436) =>
                    SHIFT(p_5, (k_427, ks_437, k_428) => {
                      const tmp_207 = $effekt.println("resource busy or locked");
                      return () => k_428(tmp_207, ks_437);
                    }, ks_436, undefined));
                case 23: 
                  return b_blockBinding_0(ks_391, (_53, ks_438) =>
                    SHIFT(p_5, (k_429, ks_439, k_430) => {
                      const tmp_208 = $effekt.println("operation canceled");
                      return () => k_430(tmp_208, ks_439);
                    }, ks_438, undefined));
                case 24: 
                  return b_blockBinding_0(ks_391, (_54, ks_440) =>
                    SHIFT(p_5, (k_431, ks_441, k_432) => {
                      const tmp_209 = $effekt.println("invalid Unicode character");
                      return () => k_432(tmp_209, ks_441);
                    }, ks_440, undefined));
                case 25: 
                  return b_blockBinding_0(ks_391, (_55, ks_442) =>
                    SHIFT(p_5, (k_433, ks_443, k_434) => {
                      const tmp_210 = $effekt.println("software caused connection abort");
                      return () => k_434(tmp_210, ks_443);
                    }, ks_442, undefined));
                case 26: 
                  return b_blockBinding_0(ks_391, (_56, ks_444) =>
                    SHIFT(p_5, (k_435, ks_445, k_436) => {
                      const tmp_211 = $effekt.println("connection refused");
                      return () => k_436(tmp_211, ks_445);
                    }, ks_444, undefined));
                case 27: 
                  return b_blockBinding_0(ks_391, (_57, ks_446) =>
                    SHIFT(p_5, (k_437, ks_447, k_438) => {
                      const tmp_212 = $effekt.println("connection reset by peer");
                      return () => k_438(tmp_212, ks_447);
                    }, ks_446, undefined));
                case 28: 
                  return b_blockBinding_0(ks_391, (_58, ks_448) =>
                    SHIFT(p_5, (k_439, ks_449, k_440) => {
                      const tmp_213 = $effekt.println("destination address required");
                      return () => k_440(tmp_213, ks_449);
                    }, ks_448, undefined));
                case 29: 
                  return b_blockBinding_0(ks_391, (_59, ks_450) =>
                    SHIFT(p_5, (k_441, ks_451, k_442) => {
                      const tmp_214 = $effekt.println("file already exists");
                      return () => k_442(tmp_214, ks_451);
                    }, ks_450, undefined));
                case 30: 
                  return b_blockBinding_0(ks_391, (_60, ks_452) =>
                    SHIFT(p_5, (k_443, ks_453, k_444) => {
                      const tmp_215 = $effekt.println("bad address in system call argument");
                      return () => k_444(tmp_215, ks_453);
                    }, ks_452, undefined));
                case 31: 
                  return b_blockBinding_0(ks_391, (_61, ks_454) =>
                    SHIFT(p_5, (k_445, ks_455, k_446) => {
                      const tmp_216 = $effekt.println("file too large");
                      return () => k_446(tmp_216, ks_455);
                    }, ks_454, undefined));
                case 32: 
                  return b_blockBinding_0(ks_391, (_62, ks_456) =>
                    SHIFT(p_5, (k_447, ks_457, k_448) => {
                      const tmp_217 = $effekt.println("host is unreachable");
                      return () => k_448(tmp_217, ks_457);
                    }, ks_456, undefined));
                case 33: 
                  return b_blockBinding_0(ks_391, (_63, ks_458) =>
                    SHIFT(p_5, (k_449, ks_459, k_450) => {
                      const tmp_218 = $effekt.println("interrupted system call");
                      return () => k_450(tmp_218, ks_459);
                    }, ks_458, undefined));
                case 34: 
                  return b_blockBinding_0(ks_391, (_64, ks_460) =>
                    SHIFT(p_5, (k_451, ks_461, k_452) => {
                      const tmp_219 = $effekt.println("invalid argument");
                      return () => k_452(tmp_219, ks_461);
                    }, ks_460, undefined));
                case 35: 
                  return b_blockBinding_0(ks_391, (_65, ks_462) =>
                    SHIFT(p_5, (k_453, ks_463, k_454) => {
                      const tmp_220 = $effekt.println("i/o error");
                      return () => k_454(tmp_220, ks_463);
                    }, ks_462, undefined));
                case 36: 
                  return b_blockBinding_0(ks_391, (_66, ks_464) =>
                    SHIFT(p_5, (k_455, ks_465, k_456) => {
                      const tmp_221 = $effekt.println("socket is already connected");
                      return () => k_456(tmp_221, ks_465);
                    }, ks_464, undefined));
                case 37: 
                  return b_blockBinding_0(ks_391, (_67, ks_466) =>
                    SHIFT(p_5, (k_457, ks_467, k_458) => {
                      const tmp_222 = $effekt.println("illegal operation on a directory");
                      return () => k_458(tmp_222, ks_467);
                    }, ks_466, undefined));
                case 38: 
                  return b_blockBinding_0(ks_391, (_68, ks_468) =>
                    SHIFT(p_5, (k_459, ks_469, k_460) => {
                      const tmp_223 = $effekt.println("too many symbolic links encountered");
                      return () => k_460(tmp_223, ks_469);
                    }, ks_468, undefined));
                case 39: 
                  return b_blockBinding_0(ks_391, (_69, ks_470) =>
                    SHIFT(p_5, (k_461, ks_471, k_462) => {
                      const tmp_224 = $effekt.println("too many open files");
                      return () => k_462(tmp_224, ks_471);
                    }, ks_470, undefined));
                case 40: 
                  return b_blockBinding_0(ks_391, (_70, ks_472) =>
                    SHIFT(p_5, (k_463, ks_473, k_464) => {
                      const tmp_225 = $effekt.println("message too long");
                      return () => k_464(tmp_225, ks_473);
                    }, ks_472, undefined));
                case 41: 
                  return b_blockBinding_0(ks_391, (_71, ks_474) =>
                    SHIFT(p_5, (k_465, ks_475, k_466) => {
                      const tmp_226 = $effekt.println("name too long");
                      return () => k_466(tmp_226, ks_475);
                    }, ks_474, undefined));
                case 42: 
                  return b_blockBinding_0(ks_391, (_72, ks_476) =>
                    SHIFT(p_5, (k_467, ks_477, k_468) => {
                      const tmp_227 = $effekt.println("network is down");
                      return () => k_468(tmp_227, ks_477);
                    }, ks_476, undefined));
                case 43: 
                  return b_blockBinding_0(ks_391, (_73, ks_478) =>
                    SHIFT(p_5, (k_469, ks_479, k_470) => {
                      const tmp_228 = $effekt.println("network is unreachable");
                      return () => k_470(tmp_228, ks_479);
                    }, ks_478, undefined));
                case 44: 
                  return b_blockBinding_0(ks_391, (_74, ks_480) =>
                    SHIFT(p_5, (k_471, ks_481, k_472) => {
                      const tmp_229 = $effekt.println("file table overflow");
                      return () => k_472(tmp_229, ks_481);
                    }, ks_480, undefined));
                case 45: 
                  return b_blockBinding_0(ks_391, (_75, ks_482) =>
                    SHIFT(p_5, (k_473, ks_483, k_474) => {
                      const tmp_230 = $effekt.println("no buffer space available");
                      return () => k_474(tmp_230, ks_483);
                    }, ks_482, undefined));
                case 46: 
                  return b_blockBinding_0(ks_391, (_76, ks_484) =>
                    SHIFT(p_5, (k_475, ks_485, k_476) => {
                      const tmp_231 = $effekt.println("no such device");
                      return () => k_476(tmp_231, ks_485);
                    }, ks_484, undefined));
                case 47: 
                  return b_blockBinding_0(ks_391, (_77, ks_486) =>
                    SHIFT(p_5, (k_477, ks_487, k_478) => {
                      const tmp_232 = $effekt.println("no such file or directory");
                      return () => k_478(tmp_232, ks_487);
                    }, ks_486, undefined));
                case 48: 
                  return b_blockBinding_0(ks_391, (_78, ks_488) =>
                    SHIFT(p_5, (k_479, ks_489, k_480) => {
                      const tmp_233 = $effekt.println("not enough memory");
                      return () => k_480(tmp_233, ks_489);
                    }, ks_488, undefined));
                case 49: 
                  return b_blockBinding_0(ks_391, (_79, ks_490) =>
                    SHIFT(p_5, (k_481, ks_491, k_482) => {
                      const tmp_234 = $effekt.println("machine is not on the network");
                      return () => k_482(tmp_234, ks_491);
                    }, ks_490, undefined));
                case 50: 
                  return b_blockBinding_0(ks_391, (_80, ks_492) =>
                    SHIFT(p_5, (k_483, ks_493, k_484) => {
                      const tmp_235 = $effekt.println("protocol not available");
                      return () => k_484(tmp_235, ks_493);
                    }, ks_492, undefined));
                case 51: 
                  return b_blockBinding_0(ks_391, (_81, ks_494) =>
                    SHIFT(p_5, (k_485, ks_495, k_486) => {
                      const tmp_236 = $effekt.println("no space left on device");
                      return () => k_486(tmp_236, ks_495);
                    }, ks_494, undefined));
                case 52: 
                  return b_blockBinding_0(ks_391, (_82, ks_496) =>
                    SHIFT(p_5, (k_487, ks_497, k_488) => {
                      const tmp_237 = $effekt.println("socket is not connected");
                      return () => k_488(tmp_237, ks_497);
                    }, ks_496, undefined));
                case 53: 
                  return b_blockBinding_0(ks_391, (_83, ks_498) =>
                    SHIFT(p_5, (k_489, ks_499, k_490) => {
                      const tmp_238 = $effekt.println("not a directory");
                      return () => k_490(tmp_238, ks_499);
                    }, ks_498, undefined));
                case 54: 
                  return b_blockBinding_0(ks_391, (_84, ks_500) =>
                    SHIFT(p_5, (k_491, ks_501, k_492) => {
                      const tmp_239 = $effekt.println("socket operation on non-socket");
                      return () => k_492(tmp_239, ks_501);
                    }, ks_500, undefined));
                case 55: 
                  return b_blockBinding_0(ks_391, (_85, ks_502) =>
                    SHIFT(p_5, (k_493, ks_503, k_494) => {
                      const tmp_240 = $effekt.println("operation not supported on socket");
                      return () => k_494(tmp_240, ks_503);
                    }, ks_502, undefined));
                case 56: 
                  return b_blockBinding_0(ks_391, (_86, ks_504) =>
                    SHIFT(p_5, (k_495, ks_505, k_496) => {
                      const tmp_241 = $effekt.println("value too large for defined data type");
                      return () => k_496(tmp_241, ks_505);
                    }, ks_504, undefined));
                case 57: 
                  return b_blockBinding_0(ks_391, (_87, ks_506) =>
                    SHIFT(p_5, (k_497, ks_507, k_498) => {
                      const tmp_242 = $effekt.println("operation not permitted");
                      return () => k_498(tmp_242, ks_507);
                    }, ks_506, undefined));
                case 58: 
                  return b_blockBinding_0(ks_391, (_88, ks_508) =>
                    SHIFT(p_5, (k_499, ks_509, k_500) => {
                      const tmp_243 = $effekt.println("broken pipe");
                      return () => k_500(tmp_243, ks_509);
                    }, ks_508, undefined));
                case 59: 
                  return b_blockBinding_0(ks_391, (_89, ks_510) =>
                    SHIFT(p_5, (k_501, ks_511, k_502) => {
                      const tmp_244 = $effekt.println("protocol not supported");
                      return () => k_502(tmp_244, ks_511);
                    }, ks_510, undefined));
                case 60: 
                  return b_blockBinding_0(ks_391, (_90, ks_512) =>
                    SHIFT(p_5, (k_503, ks_513, k_504) => {
                      const tmp_245 = $effekt.println("protocol wrong type for socket");
                      return () => k_504(tmp_245, ks_513);
                    }, ks_512, undefined));
                case 61: 
                  return b_blockBinding_0(ks_391, (_91, ks_514) =>
                    SHIFT(p_5, (k_505, ks_515, k_506) => {
                      const tmp_246 = $effekt.println("result too large");
                      return () => k_506(tmp_246, ks_515);
                    }, ks_514, undefined));
                case 62: 
                  return b_blockBinding_0(ks_391, (_92, ks_516) =>
                    SHIFT(p_5, (k_507, ks_517, k_508) => {
                      const tmp_247 = $effekt.println("read-only file system");
                      return () => k_508(tmp_247, ks_517);
                    }, ks_516, undefined));
                case 63: 
                  return b_blockBinding_0(ks_391, (_93, ks_518) =>
                    SHIFT(p_5, (k_509, ks_519, k_510) => {
                      const tmp_248 = $effekt.println("cannot send after transport endpoint shutdown");
                      return () => k_510(tmp_248, ks_519);
                    }, ks_518, undefined));
                case 64: 
                  return b_blockBinding_0(ks_391, (_94, ks_520) =>
                    SHIFT(p_5, (k_511, ks_521, k_512) => {
                      const tmp_249 = $effekt.println("invalid seek");
                      return () => k_512(tmp_249, ks_521);
                    }, ks_520, undefined));
                case 65: 
                  return b_blockBinding_0(ks_391, (_95, ks_522) =>
                    SHIFT(p_5, (k_513, ks_523, k_514) => {
                      const tmp_250 = $effekt.println("no such process");
                      return () => k_514(tmp_250, ks_523);
                    }, ks_522, undefined));
                case 66: 
                  return b_blockBinding_0(ks_391, (_96, ks_524) =>
                    SHIFT(p_5, (k_515, ks_525, k_516) => {
                      const tmp_251 = $effekt.println("connection timed out");
                      return () => k_516(tmp_251, ks_525);
                    }, ks_524, undefined));
                case 67: 
                  return b_blockBinding_0(ks_391, (_97, ks_526) =>
                    SHIFT(p_5, (k_517, ks_527, k_518) => {
                      const tmp_252 = $effekt.println("text file is busy");
                      return () => k_518(tmp_252, ks_527);
                    }, ks_526, undefined));
                case 68: 
                  return b_blockBinding_0(ks_391, (_98, ks_528) =>
                    SHIFT(p_5, (k_519, ks_529, k_520) => {
                      const tmp_253 = $effekt.println("cross-device link not permitted");
                      return () => k_520(tmp_253, ks_529);
                    }, ks_528, undefined));
                case 69: 
                  return b_blockBinding_0(ks_391, (_99, ks_530) =>
                    SHIFT(p_5, (k_521, ks_531, k_522) => {
                      const tmp_254 = $effekt.println("unknown error");
                      return () => k_522(tmp_254, ks_531);
                    }, ks_530, undefined));
                case 70: 
                  return b_blockBinding_0(ks_391, (_100, ks_532) =>
                    SHIFT(p_5, (k_523, ks_533, k_524) => {
                      const tmp_255 = $effekt.println("end of file");
                      return () => k_524(tmp_255, ks_533);
                    }, ks_532, undefined));
                case 71: 
                  return b_blockBinding_0(ks_391, (_101, ks_534) =>
                    SHIFT(p_5, (k_525, ks_535, k_526) => {
                      const tmp_256 = $effekt.println("no such device or address");
                      return () => k_526(tmp_256, ks_535);
                    }, ks_534, undefined));
                case 72: 
                  return b_blockBinding_0(ks_391, (_102, ks_536) =>
                    SHIFT(p_5, (k_527, ks_537, k_528) => {
                      const tmp_257 = $effekt.println("too many links");
                      return () => k_528(tmp_257, ks_537);
                    }, ks_536, undefined));
                case 73: 
                  return b_blockBinding_0(ks_391, (_103, ks_538) =>
                    SHIFT(p_5, (k_529, ks_539, k_530) => {
                      const tmp_258 = $effekt.println("inappropriate ioctl for device");
                      return () => k_530(tmp_258, ks_539);
                    }, ks_538, undefined));
                case 74: 
                  return b_blockBinding_0(ks_391, (_104, ks_540) =>
                    SHIFT(p_5, (k_531, ks_541, k_532) => {
                      const tmp_259 = $effekt.println("inappropriate file type or format");
                      return () => k_532(tmp_259, ks_541);
                    }, ks_540, undefined));
                case 75: 
                  return b_blockBinding_0(ks_391, (_105, ks_542) =>
                    SHIFT(p_5, (k_533, ks_543, k_534) => {
                      const tmp_260 = $effekt.println("illegal byte sequence");
                      return () => k_534(tmp_260, ks_543);
                    }, ks_542, undefined));
                case 76: 
                  return b_blockBinding_0(ks_391, (_106, ks_544) =>
                    SHIFT(p_5, (k_535, ks_545, k_536) => {
                      const tmp_261 = $effekt.println("socket type not supported");
                      return () => k_536(tmp_261, ks_545);
                    }, ks_544, undefined));
                case 77: 
                  return b_blockBinding_0(ks_391, (_107, ks_546) =>
                    SHIFT(p_5, (k_537, ks_547, k_538) => {
                      const tmp_262 = $effekt.println("protocol driver not attached");
                      return () => k_538(tmp_262, ks_547);
                    }, ks_546, undefined));
              }
            }
            if (tmp_184 === (1)) {
              return l_23(new EPERM_0(), ks_390, undefined);
            } else if (tmp_184 === (2)) {
              return l_23(new ENOENT_0(), ks_390, undefined);
            } else if (tmp_184 === (3)) {
              return l_23(new ESRCH_0(), ks_390, undefined);
            } else if (tmp_184 === (4)) {
              return l_23(new EINTR_0(), ks_390, undefined);
            } else if (tmp_184 === (5)) {
              return l_23(new EIO_0(), ks_390, undefined);
            } else if (tmp_184 === (6)) {
              return l_23(new ENXIO_0(), ks_390, undefined);
            } else if (tmp_184 === (7)) {
              return l_23(new E_0(), ks_390, undefined);
            } else if (tmp_184 === (9)) {
              return l_23(new EBADF_0(), ks_390, undefined);
            } else if (tmp_184 === (11)) {
              return l_23(new EAGAIN_0(), ks_390, undefined);
            } else if (tmp_184 === (12)) {
              return l_23(new ENOMEM_0(), ks_390, undefined);
            } else if (tmp_184 === (13)) {
              return l_23(new EACCES_0(), ks_390, undefined);
            } else if (tmp_184 === (14)) {
              return l_23(new EFAULT_0(), ks_390, undefined);
            } else if (tmp_184 === (16)) {
              return l_23(new EBUSY_0(), ks_390, undefined);
            } else if (tmp_184 === (17)) {
              return l_23(new EEXIST_0(), ks_390, undefined);
            } else if (tmp_184 === (18)) {
              return l_23(new EXDEV_0(), ks_390, undefined);
            } else if (tmp_184 === (19)) {
              return l_23(new ENODEV_0(), ks_390, undefined);
            } else if (tmp_184 === (20)) {
              return l_23(new ENOTDIR_0(), ks_390, undefined);
            } else if (tmp_184 === (21)) {
              return l_23(new EISDIR_0(), ks_390, undefined);
            } else if (tmp_184 === (22)) {
              return l_23(new EINVAL_0(), ks_390, undefined);
            } else if (tmp_184 === (23)) {
              return l_23(new ENFILE_0(), ks_390, undefined);
            } else if (tmp_184 === (24)) {
              return l_23(new EMFILE_0(), ks_390, undefined);
            } else if (tmp_184 === (25)) {
              return l_23(new ENOTTY_0(), ks_390, undefined);
            } else if (tmp_184 === (26)) {
              return l_23(new ETXTBSY_0(), ks_390, undefined);
            } else if (tmp_184 === (27)) {
              return l_23(new EFBIG_0(), ks_390, undefined);
            } else if (tmp_184 === (28)) {
              return l_23(new ENOSPC_0(), ks_390, undefined);
            } else if (tmp_184 === (29)) {
              return l_23(new ESPIPE_0(), ks_390, undefined);
            } else if (tmp_184 === (30)) {
              return l_23(new EROFS_0(), ks_390, undefined);
            } else if (tmp_184 === (31)) {
              return l_23(new EMLINK_0(), ks_390, undefined);
            } else if (tmp_184 === (32)) {
              return l_23(new EPIPE_0(), ks_390, undefined);
            } else if (tmp_184 === (34)) {
              return l_23(new ERANGE_0(), ks_390, undefined);
            } else if (tmp_184 === (36)) {
              return l_23(new ENAMETOOLONG_0(), ks_390, undefined);
            } else if (tmp_184 === (40)) {
              return l_23(new ELOOP_0(), ks_390, undefined);
            } else if (tmp_184 === (75)) {
              return l_23(new EOVERFLOW_0(), ks_390, undefined);
            } else if (tmp_184 === (79)) {
              return l_23(new EFTYPE_0(), ks_390, undefined);
            } else if (tmp_184 === (84)) {
              return l_23(new EILSEQ_0(), ks_390, undefined);
            } else if (tmp_184 === (88)) {
              return l_23(new ENOTSOCK_0(), ks_390, undefined);
            } else if (tmp_184 === (89)) {
              return l_23(new EDESTADDRREQ_0(), ks_390, undefined);
            } else if (tmp_184 === (90)) {
              return l_23(new EMSGSIZE_0(), ks_390, undefined);
            } else if (tmp_184 === (91)) {
              return l_23(new EPROTOTYPE_0(), ks_390, undefined);
            } else if (tmp_184 === (92)) {
              return l_23(new ENOPROTOOPT_0(), ks_390, undefined);
            } else if (tmp_184 === (93)) {
              return l_23(new EPROTONOSUPPORT_0(), ks_390, undefined);
            } else if (tmp_184 === (94)) {
              return l_23(new ESOCKTNOSUPPORT_0(), ks_390, undefined);
            } else if (tmp_184 === (95)) {
              return l_23(new ENOTSUP_0(), ks_390, undefined);
            } else if (tmp_184 === (97)) {
              return l_23(new EAFNOSUPPORT_0(), ks_390, undefined);
            } else if (tmp_184 === (98)) {
              return l_23(new EADDRINUSE_0(), ks_390, undefined);
            } else if (tmp_184 === (99)) {
              return l_23(new EADDRNOTAVAIL_0(), ks_390, undefined);
            } else if (tmp_184 === (100)) {
              return l_23(new ENETDOWN_0(), ks_390, undefined);
            } else if (tmp_184 === (101)) {
              return l_23(new ENETUNREACH_0(), ks_390, undefined);
            } else if (tmp_184 === (103)) {
              return l_23(new ECONNABORTED_0(), ks_390, undefined);
            } else if (tmp_184 === (104)) {
              return l_23(new ECONNRESET_0(), ks_390, undefined);
            } else if (tmp_184 === (105)) {
              return l_23(new ENOBUFS_0(), ks_390, undefined);
            } else if (tmp_184 === (106)) {
              return l_23(new EISCONN_0(), ks_390, undefined);
            } else if (tmp_184 === (107)) {
              return l_23(new ENOTCONN_0(), ks_390, undefined);
            } else if (tmp_184 === (110)) {
              return l_23(new ETIMEDOUT_0(), ks_390, undefined);
            } else if (tmp_184 === (111)) {
              return l_23(new ECONNREFUSED_0(), ks_390, undefined);
            } else if (tmp_184 === (113)) {
              return l_23(new EHOSTUNREACH_0(), ks_390, undefined);
            } else if (tmp_184 === (114)) {
              return l_23(new EALREADY_0(), ks_390, undefined);
            } else if (tmp_184 === (125)) {
              return l_23(new ECANCELED_0(), ks_390, undefined);
            } else if (tmp_184 === (200)) {
              return l_23(new EAI_ADDRFAMILY_0(), ks_390, undefined);
            } else if (tmp_184 === (201)) {
              return l_23(new EAI_AGAIN_0(), ks_390, undefined);
            } else if (tmp_184 === (202)) {
              return l_23(new EAI_BADFLAGS_0(), ks_390, undefined);
            } else if (tmp_184 === (203)) {
              return l_23(new EAI_BADHINTS_0(), ks_390, undefined);
            } else if (tmp_184 === (204)) {
              return l_23(new EAI_CANCELED_0(), ks_390, undefined);
            } else if (tmp_184 === (205)) {
              return l_23(new EAI_FAIL_0(), ks_390, undefined);
            } else if (tmp_184 === (206)) {
              return l_23(new EAI_FAMILY_0(), ks_390, undefined);
            } else if (tmp_184 === (207)) {
              return l_23(new EAI_MEMORY_0(), ks_390, undefined);
            } else if (tmp_184 === (208)) {
              return l_23(new EAI_NODATA_0(), ks_390, undefined);
            } else if (tmp_184 === (209)) {
              return l_23(new EAI_NONAME_0(), ks_390, undefined);
            } else if (tmp_184 === (210)) {
              return l_23(new EAI_OVERFLOW_0(), ks_390, undefined);
            } else if (tmp_184 === (211)) {
              return l_23(new EAI_PROTOCOL_0(), ks_390, undefined);
            } else if (tmp_184 === (212)) {
              return l_23(new EAI_SERVICE_0(), ks_390, undefined);
            } else if (tmp_184 === (213)) {
              return l_23(new EAI_SOCKTYPE_0(), ks_390, undefined);
            } else if (tmp_184 === (215)) {
              return l_23(new ECHARSET_0(), ks_390, undefined);
            } else if (tmp_184 === (216)) {
              return l_23(new ENONET_0(), ks_390, undefined);
            } else if (tmp_184 === (217)) {
              return l_23(new UNKNOWN_0(), ks_390, undefined);
            } else if (tmp_184 === (218)) {
              return l_23(new EOF_0(), ks_390, undefined);
            } else if (tmp_184 === (219)) {
              return l_23(new EUNATCH_0(), ks_390, undefined);
            } else if (tmp_184 === (220)) {
              return l_23(new ESHUTDOWN_0(), ks_390, undefined);
            } else {
              const tmp_263 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_184)))) })();
              v_r_55 = tmp_263;
            }
          } else {
            v_r_55 = v_r_54;
          }
          if (v_r_55 === (0)) {
            const s_138 = buffer_2.value;
            const s_139 = offset_2.value;
            return resize_0(s_138, s_139, ks_390, (v_r_56, ks_548) =>
              () =>
                k_540((new TextDecoder('utf-8').decode(v_r_56)), ks_548));
          } else {
            const s_140 = offset_2.value;
            offset_2.value = (s_140 + v_r_55);
            const s_141 = offset_2.value;
            const s_142 = buffer_2.value;
            if ((((s_141 + chunkSize_0)) > (s_142.length))) {
              const s_143 = buffer_2.value;
              const s_144 = buffer_2.value;
              return resize_0(s_143, ((2) * (s_144.length)), ks_390, (v_r_57, ks_549) => {
                buffer_2.value = v_r_57;
                return go_13(ks_549, k_540);
              });
            } else {
              return go_13(ks_390, k_540);
            }
          }
        });
      }
      return go_13(ks_228, (tmp_264, ks_550) => {
        DEALLOC(offset_2);
        DEALLOC(buffer_2);
        return b_blockBinding_0(ks_550, (_108, ks_551) =>
          split_0(tmp_264, "\n", ks_551, (v_r_58, ks_552) => {
            const text_0 = ks_552.arena.fresh(v_r_58);
            const output_12 = ks_552.arena.fresh("");
            const s_145 = text_0.value;
            function foreach_worker_18(l_24, ks_553, k_541) {
              switch (l_24.__tag) {
                case 0:  return () => k_541($effekt.unit, ks_553);
                case 1: 
                  const head_18 = l_24.head_0;
                  const tail_14 = l_24.tail_0;
                  const output_13 = ks_553.arena.fresh(new Nil_0());
                  return RESET((p_6, ks_554, k_542) => {
                    const ambiguity_6 = {
                      ambiguity_1: (ambiguities_0, ks_555, k_543) =>
                        SHIFT(p_6, (k_544, ks_556, k_545) => {
                          function foreach_worker_19(l_25, ks_557, k_546) {
                            switch (l_25.__tag) {
                              case 0: 
                                return () => k_546($effekt.unit, ks_557);
                              case 1: 
                                const head_19 = l_25.head_0;
                                const tail_15 = l_25.tail_0;
                                const x_4 = head_19.first_0;
                                return RESUME(k_544, (ks_558, k_547) =>
                                  () => k_547(x_4, ks_558), ks_557, (_109, ks_559) =>
                                  foreach_worker_19(tail_15, ks_559, k_546));
                            }
                          }
                          return foreach_worker_19(ambiguities_0, ks_556, k_545);
                        }, ks_555, k_543)
                    };
                    return split_0(head_18, " ", ks_554, (v_r_59, ks_560) => {
                      const tree_0 = ks_560.arena.fresh(new Sentence_0(new Nil_0(), new Nil_0()));
                      return RESET((p_7, ks_561, k_548) => {
                        const append_0 = {
                          append_1: (n_6, ks_562, k_549) => {
                            const s_146 = tree_0.value;
                            switch (s_146.__tag) {
                              case 1: 
                                const subjects_1 = s_146.subjects_0;
                                const predicates_1 = s_146.predicates_0;
                                switch (n_6.__tag) {
                                  case 8: 
                                    const res_4 = ks_562.arena.fresh(new Nil_0());
                                    function foreach_worker_20(l_26, ks_563, k_550) {
                                      foreach_worker_21: while (true) {
                                        switch (l_26.__tag) {
                                          case 0: 
                                            return () =>
                                              k_550($effekt.unit, ks_563);
                                          case 1: 
                                            const head_20 = l_26.head_0;
                                            const tail_16 = l_26.tail_0;
                                            const s_147 = res_4.value;
                                            res_4.value = new Cons_0(head_20, s_147);
                                            /* prepare call */
                                            l_26 = tail_16;
                                            continue foreach_worker_21;
                                        }
                                      }
                                    }
                                    return foreach_worker_20(subjects_1, ks_562, (_110, ks_564) => {
                                      const s_148 = res_4.value;
                                      return reverseOnto_0(s_148, new Cons_0(n_6, new Nil_0()), ks_564, (v_r_60, ks_565) => {
                                        tree_0.value = new Sentence_0(v_r_60, predicates_1);
                                        DEALLOC(res_4);
                                        return () =>
                                          k_549($effekt.unit, ks_565);
                                      });
                                    });
                                  case 2: 
                                    const res_5 = ks_562.arena.fresh(new Nil_0());
                                    function foreach_worker_22(l_27, ks_566, k_551) {
                                      foreach_worker_23: while (true) {
                                        switch (l_27.__tag) {
                                          case 0: 
                                            return () =>
                                              k_551($effekt.unit, ks_566);
                                          case 1: 
                                            const head_21 = l_27.head_0;
                                            const tail_17 = l_27.tail_0;
                                            const s_149 = res_5.value;
                                            res_5.value = new Cons_0(head_21, s_149);
                                            /* prepare call */
                                            l_27 = tail_17;
                                            continue foreach_worker_23;
                                        }
                                      }
                                    }
                                    return foreach_worker_22(predicates_1, ks_562, (_111, ks_567) => {
                                      const s_150 = res_5.value;
                                      return reverseOnto_0(s_150, new Cons_0(n_6, new Nil_0()), ks_567, (v_r_61, ks_568) => {
                                        tree_0.value = new Sentence_0(subjects_1, v_r_61);
                                        DEALLOC(res_5);
                                        return () =>
                                          k_549($effekt.unit, ks_568);
                                      });
                                    });
                                  default: 
                                    tree_0.value = new Empty_0();
                                    return () =>
                                      k_549($effekt.unit, ks_562);
                                }
                                break;
                              default: 
                                tree_0.value = new Empty_0();
                                return () => k_549($effekt.unit, ks_562);
                            }
                          }
                        };
                        function findAndRemoveSubjects_worker_0(sentence_0, ks_570, k_556) {
                          let v_r_62 = undefined;
                          switch (sentence_0.__tag) {
                            case 1: 
                              const head_22 = sentence_0.head_0;
                              const tail_18 = sentence_0.tail_0;
                              if (head_22 === "mi") {
                                switch (tail_18.__tag) {
                                  case 1: 
                                    const head_23 = tail_18.head_0;
                                    if (head_23 === "li") {
                                      return SHIFT(p_7, (k_552, ks_569, k_553) => {
                                        const tmp_265 = $effekt.println(((("SENTENCE ERROR: ") + ("If mi is subject, li is not needed"))));
                                        return () =>
                                          k_553(new Empty_0(), ks_569);
                                      }, ks_570, undefined);
                                    } else if (head_23 === "en") {
                                      v_r_62 = false;
                                    } else if (head_23 === "ala") {
                                      v_r_62 = false;
                                    } else {
                                      v_r_62 = true;
                                    }
                                    break;
                                  default:  v_r_62 = true;
                                }
                              } else if (head_22 === "sina") {
                                switch (tail_18.__tag) {
                                  case 1: 
                                    const head_24 = tail_18.head_0;
                                    if (head_24 === "li") {
                                      return SHIFT(p_7, (k_554, ks_571, k_555) => {
                                        const tmp_266 = $effekt.println(((("SENTENCE ERROR: ") + ("If sina is subject, li is not needed"))));
                                        return () =>
                                          k_555(new Empty_0(), ks_571);
                                      }, ks_570, undefined);
                                    } else if (head_24 === "en") {
                                      v_r_62 = false;
                                    } else if (head_24 === "ala") {
                                      v_r_62 = false;
                                    } else {
                                      v_r_62 = true;
                                    }
                                    break;
                                  default:  v_r_62 = true;
                                }
                              } else {
                                v_r_62 = false;
                              }
                              break;
                            default:  v_r_62 = false;
                          }
                          if (v_r_62) {
                            return take_0(sentence_0, 1, ks_570, (v_r_63, ks_572) =>
                              append_0.append_1(new SubjectLeaf_0(v_r_63, new Nil_0()), ks_572, (_112, ks_573) =>
                                drop_0(sentence_0, 1, ks_573, k_556)));
                          } else {
                            return getIndexOf_0(sentence_0, "en", ks_570, (v_r_64, ks_574) => {
                              switch (v_r_64.__tag) {
                                case 1: 
                                  const index_11 = v_r_64.value_0;
                                  return take_0(sentence_0, 1, ks_574, (v_r_65, ks_575) =>
                                    drop_0(sentence_0, 1, ks_575, (prefix_2, ks_576) =>
                                      take_0(prefix_2, (index_11 - (1)), ks_576, (v_r_66, ks_577) =>
                                        createModifiers_0(v_r_66, ks_577, (v_r_67, ks_578) =>
                                          append_0.append_1(new SubjectLeaf_0(v_r_65, v_r_67), ks_578, (_113, ks_579) =>
                                            drop_0(sentence_0, (index_11 + (1)), ks_579, (v_r_68, ks_580) =>
                                              findAndRemoveSubjects_worker_0(v_r_68, ks_580, k_556)))))));
                                case 0: 
                                  return getIndexOf_0(sentence_0, "li", ks_574, (v_r_69, ks_581) => {
                                    switch (v_r_69.__tag) {
                                      case 1: 
                                        const index_12 = v_r_69.value_0;
                                        return take_0(sentence_0, 1, ks_581, (v_r_70, ks_582) =>
                                          drop_0(sentence_0, 1, ks_582, (prefix_3, ks_583) =>
                                            take_0(prefix_3, (index_12 - (1)), ks_583, (v_r_71, ks_584) =>
                                              createModifiers_0(v_r_71, ks_584, (v_r_72, ks_585) =>
                                                append_0.append_1(new SubjectLeaf_0(v_r_70, v_r_72), ks_585, (_114, ks_586) =>
                                                  drop_0(sentence_0, (index_12 + (1)), ks_586, k_556))))));
                                      case 0: 
                                        return take_0(sentence_0, 1, ks_581, (v_r_73, ks_587) =>
                                          drop_0(sentence_0, 1, ks_587, (v_r_74, ks_588) =>
                                            createModifiers_0(v_r_74, ks_588, (v_r_75, ks_589) =>
                                              append_0.append_1(new SubjectLeaf_0(v_r_73, v_r_75), ks_589, (_115, ks_590) =>
                                                () =>
                                                  k_556(new Nil_0(), ks_590)))));
                                    }
                                  });
                              }
                            });
                          }
                        }
                        return findAndRemoveSubjects_worker_0(v_r_59, ks_561, (v_r_76, ks_591) => {
                          function findAndRemovePredicates_worker_0(sentence_1, ks_592, k_570) {
                            return getIndexOf_1(sentence_1, new Cons_0("lon", new Cons_0("kepeken", new Cons_0("tawa", new Cons_0("tan", new Cons_0("sama", new Cons_0("li", new Cons_0("e", new Nil_0()))))))), ks_592, (v_r_77, ks_593) => {
                              function l_28(endOfVerb_0, ks_594, k_568) {
                                return getIndexOf_1(sentence_1, new Cons_0("wile", new Cons_0("sona", new Cons_0("awen", new Cons_0("kama", new Cons_0("ken", new Cons_0("lukin", new Nil_0())))))), ks_594, (v_r_78, ks_595) => {
                                  let endOfPreverbs_0 = undefined;
                                  switch (v_r_78.__tag) {
                                    case 1: 
                                      switch (sentence_1.__tag) {
                                        case 1: 
                                          const tail_19 = sentence_1.tail_0;
                                          switch (tail_19.__tag) {
                                            case 1: 
                                              const head_25 = tail_19.head_0;
                                              if (head_25 === "ala") {
                                                endOfPreverbs_0 = 2;
                                              } else if ((endOfVerb_0 > (1))) {
                                                endOfPreverbs_0 = 1;
                                              } else {
                                                endOfPreverbs_0 = 0;
                                              }
                                              break;
                                            default: 
                                              if ((endOfVerb_0 > (1))) {
                                                endOfPreverbs_0 = 1;
                                              } else {
                                                endOfPreverbs_0 = 0;
                                              }
                                          }
                                          break;
                                        default: 
                                          if ((endOfVerb_0 > (1))) {
                                            endOfPreverbs_0 = 1;
                                          } else {
                                            endOfPreverbs_0 = 0;
                                          }
                                      }
                                      break;
                                    case 0:  endOfPreverbs_0 = 0;break;
                                  }
                                  return getIndexOf_0(sentence_1, "li", ks_595, (v_r_79, ks_596) => {
                                    function l_29(endOfPredicate_0, ks_597, k_567) {
                                      return getIndexOf_1(sentence_1, new Cons_0("lon", new Cons_0("kepeken", new Cons_0("tawa", new Cons_0("tan", new Cons_0("sama", new Cons_0("li", new Nil_0())))))), ks_597, (v_r_80, ks_598) => {
                                        let endOfObjects_0 = undefined;
                                        switch (v_r_80.__tag) {
                                          case 1: 
                                            const index_13 = v_r_80.value_0;
                                            endOfObjects_0 = index_13;
                                            break;
                                          case 0: 
                                            endOfObjects_0 = endOfPredicate_0;
                                            break;
                                        }
                                        const tmp_267 = (endOfVerb_0 + (1));
                                        return drop_0(sentence_1, tmp_267, ks_598, (prefix_4, ks_599) =>
                                          take_0(prefix_4, (endOfObjects_0 - tmp_267), ks_599, (v_r_81, ks_600) => {
                                            const output_14 = ks_600.arena.fresh(new Nil_0());
                                            function splitObjectsHelper_worker_0(sentence_2, ks_601, k_558) {
                                              const n_7 = ks_601.arena.fresh(0);
                                              function foreach_worker_24(l_30, ks_602, k_557) {
                                                foreach_worker_25: while (true) {
                                                  switch (l_30.__tag) {
                                                    case 0: 
                                                      return () =>
                                                        k_557($effekt.unit, ks_602);
                                                    case 1: 
                                                      const tail_20 = l_30.tail_0;
                                                      const s_151 = n_7.value;
                                                      n_7.value = (s_151 + (1));
                                                      /* prepare call */
                                                      l_30 = tail_20;
                                                      continue foreach_worker_25;
                                                  }
                                                }
                                              }
                                              return foreach_worker_24(sentence_2, ks_601, (_116, ks_603) => {
                                                const s_152 = n_7.value;
                                                if (s_152 === (0)) {
                                                  DEALLOC(n_7);
                                                  return () =>
                                                    k_558($effekt.unit, ks_603);
                                                } else {
                                                  return drop_0(sentence_2, 1, ks_603, (v_r_82, ks_604) =>
                                                    getIndexOf_0(v_r_82, "e", ks_604, (v_r_83, ks_605) => {
                                                      switch (v_r_83.__tag) {
                                                        case 1: 
                                                          const index_14 = v_r_83.value_0;
                                                          return take_0(sentence_2, 1, ks_605, (v_r_84, ks_606) =>
                                                            drop_0(sentence_2, 1, ks_606, (prefix_5, ks_607) =>
                                                              take_0(prefix_5, (((index_14 + (1))) - (1)), ks_607, (v_r_85, ks_608) =>
                                                                createModifiers_0(v_r_85, ks_608, (v_r_86, ks_609) => {
                                                                  const s_153 = output_14.value;
                                                                  const res_6 = ks_609.arena.fresh(new Nil_0());
                                                                  function foreach_worker_26(l_31, ks_610, k_559) {
                                                                    foreach_worker_27: while (true) {
                                                                      switch (l_31.__tag) {
                                                                        case 0: 
                                                                          return () =>
                                                                            k_559($effekt.unit, ks_610);
                                                                        case 1: 
                                                                          const head_26 = l_31.head_0;
                                                                          const tail_21 = l_31.tail_0;
                                                                          const s_154 = res_6.value;
                                                                          res_6.value = new Cons_0(head_26, s_154);
                                                                          /* prepare call */
                                                                          l_31 = tail_21;
                                                                          continue foreach_worker_27;
                                                                      }
                                                                    }
                                                                  }
                                                                  return foreach_worker_26(s_153, ks_609, (_117, ks_611) => {
                                                                    const s_155 = res_6.value;
                                                                    return reverseOnto_0(s_155, new Cons_0(new ObjectLeaf_0(v_r_84, v_r_86), new Nil_0()), ks_611, (v_r_87, ks_612) => {
                                                                      output_14.value = v_r_87;
                                                                      return drop_0(sentence_2, (index_14 + (2)), ks_612, (v_r_88, ks_613) =>
                                                                        splitObjectsHelper_worker_0(v_r_88, ks_613, (_118, ks_614) => {
                                                                          DEALLOC(res_6);
                                                                          DEALLOC(n_7);
                                                                          return () =>
                                                                            k_558($effekt.unit, ks_614);
                                                                        }));
                                                                    });
                                                                  });
                                                                }))));
                                                        case 0: 
                                                          return take_0(sentence_2, 1, ks_605, (v_r_89, ks_615) =>
                                                            drop_0(sentence_2, 1, ks_615, (v_r_90, ks_616) =>
                                                              createModifiers_0(v_r_90, ks_616, (v_r_91, ks_617) => {
                                                                const s_156 = output_14.value;
                                                                const res_7 = ks_617.arena.fresh(new Nil_0());
                                                                function foreach_worker_28(l_32, ks_618, k_560) {
                                                                  foreach_worker_29: while (true) {
                                                                    switch (l_32.__tag) {
                                                                      case 0: 
                                                                        return () =>
                                                                          k_560($effekt.unit, ks_618);
                                                                      case 1: 
                                                                        const head_27 = l_32.head_0;
                                                                        const tail_22 = l_32.tail_0;
                                                                        const s_157 = res_7.value;
                                                                        res_7.value = new Cons_0(head_27, s_157);
                                                                        /* prepare call */
                                                                        l_32 = tail_22;
                                                                        continue foreach_worker_29;
                                                                    }
                                                                  }
                                                                }
                                                                return foreach_worker_28(s_156, ks_617, (_119, ks_619) => {
                                                                  const s_158 = res_7.value;
                                                                  return reverseOnto_0(s_158, new Cons_0(new ObjectLeaf_0(v_r_89, v_r_91), new Nil_0()), ks_619, (v_r_92, ks_620) => {
                                                                    output_14.value = v_r_92;
                                                                    DEALLOC(res_7);
                                                                    DEALLOC(n_7);
                                                                    return () =>
                                                                      k_558($effekt.unit, ks_620);
                                                                  });
                                                                });
                                                              })));
                                                      }
                                                    }));
                                                }
                                              });
                                            }
                                            return splitObjectsHelper_worker_0(v_r_81, ks_600, (_120, ks_621) => {
                                              const s_159 = output_14.value;
                                              return take_0(sentence_1, endOfPreverbs_0, ks_621, (v_r_93, ks_622) =>
                                                drop_0(sentence_1, endOfPreverbs_0, ks_622, (prefix_6, ks_623) =>
                                                  take_0(prefix_6, (((endOfPreverbs_0 + (1))) - endOfPreverbs_0), ks_623, (v_r_94, ks_624) => {
                                                    const tmp_268 = (endOfPreverbs_0 + (1));
                                                    return drop_0(sentence_1, tmp_268, ks_624, (prefix_7, ks_625) =>
                                                      take_0(prefix_7, (endOfVerb_0 - tmp_268), ks_625, (v_r_95, ks_626) =>
                                                        createModifiers_0(v_r_95, ks_626, (v_r_96, ks_627) =>
                                                          drop_0(sentence_1, endOfObjects_0, ks_627, (prefix_8, ks_628) =>
                                                            take_0(prefix_8, (endOfPredicate_0 - endOfObjects_0), ks_628, (v_r_97, ks_629) => {
                                                              const output_15 = ks_629.arena.fresh(new Nil_0());
                                                              function splitPrepositionsHelper_worker_0(sentence_3, ks_630, k_562) {
                                                                const n_8 = ks_630.arena.fresh(0);
                                                                function foreach_worker_30(l_33, ks_631, k_561) {
                                                                  foreach_worker_31: while (true) {
                                                                    switch (l_33.__tag) {
                                                                      case 0: 
                                                                        return () =>
                                                                          k_561($effekt.unit, ks_631);
                                                                      case 1: 
                                                                        const tail_23 = l_33.tail_0;
                                                                        const s_160 = n_8.value;
                                                                        n_8.value = (s_160 + (1));
                                                                        /* prepare call */
                                                                        l_33 = tail_23;
                                                                        continue foreach_worker_31;
                                                                    }
                                                                  }
                                                                }
                                                                return foreach_worker_30(sentence_3, ks_630, (_121, ks_632) => {
                                                                  const s_161 = n_8.value;
                                                                  if (s_161 === (0)) {
                                                                    DEALLOC(n_8);
                                                                    return () =>
                                                                      k_562($effekt.unit, ks_632);
                                                                  } else {
                                                                    return drop_0(sentence_3, 1, ks_632, (v_r_98, ks_633) =>
                                                                      getIndexOf_1(v_r_98, new Cons_0("lon", new Cons_0("kepeken", new Cons_0("tawa", new Cons_0("tan", new Cons_0("sama", new Nil_0()))))), ks_633, (v_r_99, ks_634) => {
                                                                        switch (v_r_99.__tag) {
                                                                          case 1: 
                                                                            const index_15 = v_r_99.value_0;
                                                                            return take_0(sentence_3, 1, ks_634, (v_r_100, ks_635) =>
                                                                              drop_0(sentence_3, 1, ks_635, (prefix_9, ks_636) =>
                                                                                take_0(prefix_9, ((2) - (1)), ks_636, (v_r_101, ks_637) =>
                                                                                  drop_0(sentence_3, 2, ks_637, (prefix_10, ks_638) =>
                                                                                    take_0(prefix_10, (((index_15 + (1))) - (2)), ks_638, (v_r_102, ks_639) =>
                                                                                      createModifiers_0(v_r_102, ks_639, (v_r_103, ks_640) => {
                                                                                        const s_162 = output_15.value;
                                                                                        const res_8 = ks_640.arena.fresh(new Nil_0());
                                                                                        function foreach_worker_32(l_34, ks_641, k_563) {
                                                                                          foreach_worker_33: while (true) {
                                                                                            switch (l_34.__tag) {
                                                                                              case 0: 
                                                                                                return () =>
                                                                                                  k_563($effekt.unit, ks_641);
                                                                                              case 1: 
                                                                                                const head_28 = l_34.head_0;
                                                                                                const tail_24 = l_34.tail_0;
                                                                                                const s_163 = res_8.value;
                                                                                                res_8.value = new Cons_0(head_28, s_163);
                                                                                                /* prepare call */
                                                                                                l_34 = tail_24;
                                                                                                continue foreach_worker_33;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        return foreach_worker_32(s_162, ks_640, (_122, ks_642) => {
                                                                                          const s_164 = res_8.value;
                                                                                          return reverseOnto_0(s_164, new Cons_0(new PrepositionsLeaf_0(v_r_100, v_r_101, v_r_103), new Nil_0()), ks_642, (v_r_104, ks_643) => {
                                                                                            output_15.value = v_r_104;
                                                                                            return drop_0(sentence_3, (index_15 + (1)), ks_643, (v_r_105, ks_644) =>
                                                                                              splitPrepositionsHelper_worker_0(v_r_105, ks_644, (_123, ks_645) => {
                                                                                                DEALLOC(res_8);
                                                                                                DEALLOC(n_8);
                                                                                                return () =>
                                                                                                  k_562($effekt.unit, ks_645);
                                                                                              }));
                                                                                          });
                                                                                        });
                                                                                      }))))));
                                                                          case 0: 
                                                                            return take_0(sentence_3, 1, ks_634, (v_r_106, ks_646) =>
                                                                              drop_0(sentence_3, 1, ks_646, (prefix_11, ks_647) =>
                                                                                take_0(prefix_11, ((2) - (1)), ks_647, (v_r_107, ks_648) =>
                                                                                  drop_0(sentence_3, 2, ks_648, (v_r_108, ks_649) =>
                                                                                    createModifiers_0(v_r_108, ks_649, (v_r_109, ks_650) => {
                                                                                      const s_165 = output_15.value;
                                                                                      const res_9 = ks_650.arena.fresh(new Nil_0());
                                                                                      function foreach_worker_34(l_35, ks_651, k_564) {
                                                                                        foreach_worker_35: while (true) {
                                                                                          switch (l_35.__tag) {
                                                                                            case 0: 
                                                                                              return () =>
                                                                                                k_564($effekt.unit, ks_651);
                                                                                            case 1: 
                                                                                              const head_29 = l_35.head_0;
                                                                                              const tail_25 = l_35.tail_0;
                                                                                              const s_166 = res_9.value;
                                                                                              res_9.value = new Cons_0(head_29, s_166);
                                                                                              /* prepare call */
                                                                                              l_35 = tail_25;
                                                                                              continue foreach_worker_35;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      return foreach_worker_34(s_165, ks_650, (_124, ks_652) => {
                                                                                        const s_167 = res_9.value;
                                                                                        return reverseOnto_0(s_167, new Cons_0(new PrepositionsLeaf_0(v_r_106, v_r_107, v_r_109), new Nil_0()), ks_652, (v_r_110, ks_653) => {
                                                                                          output_15.value = v_r_110;
                                                                                          DEALLOC(res_9);
                                                                                          DEALLOC(n_8);
                                                                                          return () =>
                                                                                            k_562($effekt.unit, ks_653);
                                                                                        });
                                                                                      });
                                                                                    })))));
                                                                        }
                                                                      }));
                                                                  }
                                                                });
                                                              }
                                                              return splitPrepositionsHelper_worker_0(v_r_97, ks_629, (_125, ks_654) => {
                                                                const s_168 = output_15.value;
                                                                return append_0.append_1(new Predicate_0(new TokiPonaVerbLeaf_0(v_r_93, v_r_94, v_r_96), s_159, s_168), ks_654, (_126, ks_655) => {
                                                                  const n_9 = ks_655.arena.fresh(0);
                                                                  function foreach_worker_36(l_36, ks_656, k_565) {
                                                                    foreach_worker_37: while (true) {
                                                                      switch (l_36.__tag) {
                                                                        case 0: 
                                                                          return () =>
                                                                            k_565($effekt.unit, ks_656);
                                                                        case 1: 
                                                                          const tail_26 = l_36.tail_0;
                                                                          const s_169 = n_9.value;
                                                                          n_9.value = (s_169 + (1));
                                                                          /* prepare call */
                                                                          l_36 = tail_26;
                                                                          continue foreach_worker_37;
                                                                      }
                                                                    }
                                                                  }
                                                                  return foreach_worker_36(sentence_1, ks_655, (_127, ks_657) => {
                                                                    const s_170 = n_9.value;
                                                                    function k_566(tmp_269, ks_658) {
                                                                      DEALLOC(n_9);
                                                                      DEALLOC(output_15);
                                                                      DEALLOC(output_14);
                                                                      return () =>
                                                                        k_567(tmp_269, ks_658);
                                                                    }
                                                                    if (endOfPredicate_0 === s_170) {
                                                                      return () =>
                                                                        k_566(new Nil_0(), ks_657);
                                                                    } else {
                                                                      return drop_0(sentence_1, (endOfPredicate_0 + (1)), ks_657, (v_r_111, ks_659) =>
                                                                        findAndRemovePredicates_worker_0(v_r_111, ks_659, k_566));
                                                                    }
                                                                  });
                                                                });
                                                              });
                                                            })))));
                                                  })));
                                            });
                                          }));
                                      });
                                    }
                                    switch (v_r_79.__tag) {
                                      case 1: 
                                        const index_16 = v_r_79.value_0;
                                        return l_29(index_16, ks_596, k_568);
                                      case 0: 
                                        const n_10 = ks_596.arena.fresh(0);
                                        function foreach_worker_38(l_37, ks_660, k_569) {
                                          foreach_worker_39: while (true) {
                                            switch (l_37.__tag) {
                                              case 0: 
                                                return () =>
                                                  k_569($effekt.unit, ks_660);
                                              case 1: 
                                                const tail_27 = l_37.tail_0;
                                                const s_171 = n_10.value;
                                                n_10.value = (s_171 + (1));
                                                /* prepare call */
                                                l_37 = tail_27;
                                                continue foreach_worker_39;
                                            }
                                          }
                                        }
                                        return foreach_worker_38(sentence_1, ks_596, (_128, ks_661) => {
                                          const s_172 = n_10.value;
                                          return l_29(s_172, ks_661, (tmp_270, ks_662) => {
                                            DEALLOC(n_10);
                                            return () =>
                                              k_568(tmp_270, ks_662);
                                          });
                                        });
                                    }
                                  });
                                });
                              }
                              switch (v_r_77.__tag) {
                                case 1: 
                                  const index_17 = v_r_77.value_0;
                                  return l_28(index_17, ks_593, k_570);
                                case 0: 
                                  const n_11 = ks_593.arena.fresh(0);
                                  function foreach_worker_40(l_38, ks_663, k_571) {
                                    foreach_worker_41: while (true) {
                                      switch (l_38.__tag) {
                                        case 0: 
                                          return () =>
                                            k_571($effekt.unit, ks_663);
                                        case 1: 
                                          const tail_28 = l_38.tail_0;
                                          const s_173 = n_11.value;
                                          n_11.value = (s_173 + (1));
                                          /* prepare call */
                                          l_38 = tail_28;
                                          continue foreach_worker_41;
                                      }
                                    }
                                  }
                                  return foreach_worker_40(sentence_1, ks_593, (_129, ks_664) => {
                                    const s_174 = n_11.value;
                                    return l_28(s_174, ks_664, (tmp_271, ks_665) => {
                                      DEALLOC(n_11);
                                      return () => k_570(tmp_271, ks_665);
                                    });
                                  });
                              }
                            });
                          }
                          return findAndRemovePredicates_worker_0(v_r_76, ks_591, (_130, ks_666) => {
                            const s_175 = tree_0.value;
                            return () => k_548(s_175, ks_666);
                          });
                        });
                      }, ks_560, (tmp_272, ks_667) => {
                        DEALLOC(tree_0);
                        const thirdPerson_3 = ks_667.arena.fresh(true);
                        const firstPerson_0 = ks_667.arena.fresh(false);
                        const negate_1 = ks_667.arena.fresh(false);
                        const storage_0 = ks_667.arena.fresh("");
                        const counter_0 = ks_667.arena.fresh(0);
                        const setSubjectPerson_6 = {
                          setSubjectPerson_1: (subjectPerson_0, ks_668, k_572) => {
                            switch (subjectPerson_0.__tag) {
                              case 0: 
                                firstPerson_0.value = true;
                                thirdPerson_3.value = false;
                                return () => k_572($effekt.unit, ks_668);
                              case 1: 
                                thirdPerson_3.value = false;
                                return () => k_572($effekt.unit, ks_668);
                            }
                          }
                        };
                        const negateNext_2 = {
                          negateNext_1: (newNegate_0, ks_669, k_573) => {
                            negate_1.value = newNegate_0;
                            return () => k_573($effekt.unit, ks_669);
                          }
                        };
                        function convertSyntaxTreeHelper_worker_0(tokiPonaTree_0, context_2, ks_670, k_577) {
                          convertSyntaxTreeHelper_worker_1: while (true) {
                            switch (tokiPonaTree_0.__tag) {
                              case 1: 
                                const subjects_2 = tokiPonaTree_0.subjects_0;
                                const predicates_2 = tokiPonaTree_0.predicates_0;
                                const n_12 = ks_670.arena.fresh(0);
                                function foreach_worker_42(l_39, ks_671, k_574) {
                                  foreach_worker_43: while (true) {
                                    switch (l_39.__tag) {
                                      case 0: 
                                        return () =>
                                          k_574($effekt.unit, ks_671);
                                      case 1: 
                                        const tail_29 = l_39.tail_0;
                                        const s_176 = n_12.value;
                                        n_12.value = (s_176 + (1));
                                        /* prepare call */
                                        l_39 = tail_29;
                                        continue foreach_worker_43;
                                    }
                                  }
                                }
                                return foreach_worker_42(subjects_2, ks_670, (_131, ks_672) => {
                                  const s_177 = n_12.value;
                                  if ((s_177 > (1))) {
                                    thirdPerson_3.value = false;
                                    return map_0(subjects_2, (x_5, ks_673, k_575) =>
                                      convertSyntaxTreeHelper_worker_0(x_5, new Subject_0(), ks_673, k_575), ks_672, (v_r_112, ks_674) =>
                                      map_0(predicates_2, (x_6, ks_675, k_576) =>
                                        convertSyntaxTreeHelper_worker_0(x_6, new Nothing_0(), ks_675, k_576), ks_674, (v_r_113, ks_676) => {
                                        DEALLOC(n_12);
                                        return () =>
                                          k_577(new Sentence_0(v_r_112, v_r_113), ks_676);
                                      }));
                                  } else {
                                    return map_0(subjects_2, (x_7, ks_677, k_578) =>
                                      convertSyntaxTreeHelper_worker_0(x_7, new Subject_0(), ks_677, k_578), ks_672, (v_r_114, ks_678) =>
                                      map_0(predicates_2, (x_8, ks_679, k_579) =>
                                        convertSyntaxTreeHelper_worker_0(x_8, new Nothing_0(), ks_679, k_579), ks_678, (v_r_115, ks_680) => {
                                        DEALLOC(n_12);
                                        return () =>
                                          k_577(new Sentence_0(v_r_114, v_r_115), ks_680);
                                      }));
                                  }
                                });
                              case 2: 
                                const verb_1 = tokiPonaTree_0.verb_0;
                                const objects_1 = tokiPonaTree_0.objects_0;
                                const prepositions_1 = tokiPonaTree_0.prepositions_0;
                                /* prepare call */
                                const tmp_k_1 = k_577;
                                k_577 = (v_r_116, ks_681) =>
                                  map_0(objects_1, (x_9, ks_682, k_580) =>
                                    convertSyntaxTreeHelper_worker_0(x_9, new Object_0(), ks_682, k_580), ks_681, (v_r_117, ks_683) =>
                                    map_0(prepositions_1, (x_10, ks_684, k_581) =>
                                      convertSyntaxTreeHelper_worker_0(x_10, new Preposition_0(), ks_684, k_581), ks_683, (v_r_118, ks_685) =>
                                      () =>
                                        tmp_k_1(new Predicate_0(v_r_116, v_r_117, v_r_118), ks_685)));
                                tokiPonaTree_0 = verb_1;
                                context_2 = new Verb_0();
                                continue convertSyntaxTreeHelper_worker_1;
                              case 3: 
                                const head_30 = tokiPonaTree_0.head_1;
                                const modifiers_9 = tokiPonaTree_0.modifiers_0;
                                switch (context_2.__tag) {
                                  case 6: 
                                    const n_13 = ks_670.arena.fresh(0);
                                    function foreach_worker_44(l_40, ks_686, k_582) {
                                      foreach_worker_45: while (true) {
                                        switch (l_40.__tag) {
                                          case 0: 
                                            return () =>
                                              k_582($effekt.unit, ks_686);
                                          case 1: 
                                            const tail_30 = l_40.tail_0;
                                            const s_178 = n_13.value;
                                            n_13.value = (s_178 + (1));
                                            /* prepare call */
                                            l_40 = tail_30;
                                            continue foreach_worker_45;
                                        }
                                      }
                                    }
                                    return foreach_worker_44(modifiers_9, ks_670, (_132, ks_687) => {
                                      const s_179 = n_13.value;
                                      if (s_179 === (0)) {
                                        return map_0(head_30, (word_8, ks_688, k_583) => {
                                          const s_180 = thirdPerson_3.value;
                                          return translateWord_0(word_8, new Adjective_0(), s_180, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_688, k_583);
                                        }, ks_687, (v_r_119, ks_689) => {
                                          DEALLOC(n_13);
                                          return () =>
                                            k_577(new ModifierLeaf_0(v_r_119, new Nil_0()), ks_689);
                                        });
                                      } else {
                                        return map_0(head_30, (word_9, ks_690, k_584) => {
                                          const s_181 = thirdPerson_3.value;
                                          const output_16 = ks_690.arena.fresh(false);
                                          function foreach_worker_46(l_41, ks_691, k_585) {
                                            foreach_worker_47: while (true) {
                                              switch (l_41.__tag) {
                                                case 0: 
                                                  return () =>
                                                    k_585($effekt.unit, ks_691);
                                                case 1: 
                                                  const head_31 = l_41.head_0;
                                                  const tail_31 = l_41.tail_0;
                                                  if (head_31 === "ala") {
                                                    output_16.value = true;
                                                    /* prepare call */
                                                    l_41 = tail_31;
                                                    continue foreach_worker_47;
                                                  } else {
                                                    /* prepare call */
                                                    l_41 = tail_31;
                                                    continue foreach_worker_47;
                                                  }
                                                  break;
                                              }
                                            }
                                          }
                                          return foreach_worker_46(modifiers_9, ks_690, (_133, ks_692) => {
                                            const s_182 = output_16.value;
                                            return translateWord_0(word_9, new Object_0(), s_181, s_182, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_692, (tmp_273, ks_693) => {
                                              DEALLOC(output_16);
                                              return () =>
                                                k_584(tmp_273, ks_693);
                                            });
                                          });
                                        }, ks_687, (v_r_120, ks_694) =>
                                          map_0(modifiers_9, (word_10, ks_695, k_586) => {
                                            const s_183 = thirdPerson_3.value;
                                            const s_184 = negate_1.value;
                                            return translateWord_0(word_10, new Adjective_0(), s_183, s_184, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_695, k_586);
                                          }, ks_694, (v_r_121, ks_696) => {
                                            DEALLOC(n_13);
                                            return () =>
                                              k_577(new ModifierLeaf_0(v_r_120, v_r_121), ks_696);
                                          }));
                                      }
                                    });
                                  case 5: 
                                    const n_14 = ks_670.arena.fresh(0);
                                    function foreach_worker_48(l_42, ks_697, k_587) {
                                      foreach_worker_49: while (true) {
                                        switch (l_42.__tag) {
                                          case 0: 
                                            return () =>
                                              k_587($effekt.unit, ks_697);
                                          case 1: 
                                            const tail_32 = l_42.tail_0;
                                            const s_185 = n_14.value;
                                            n_14.value = (s_185 + (1));
                                            /* prepare call */
                                            l_42 = tail_32;
                                            continue foreach_worker_49;
                                        }
                                      }
                                    }
                                    return foreach_worker_48(modifiers_9, ks_670, (_134, ks_698) => {
                                      const s_186 = n_14.value;
                                      if (s_186 === (0)) {
                                        return map_0(head_30, (word_11, ks_699, k_588) => {
                                          const s_187 = thirdPerson_3.value;
                                          return translateWord_0(word_11, new Adverb_0(), s_187, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_699, k_588);
                                        }, ks_698, (v_r_122, ks_700) => {
                                          DEALLOC(n_14);
                                          return () =>
                                            k_577(new AdverbLeaf_0(v_r_122, new Nil_0()), ks_700);
                                        });
                                      } else {
                                        return map_0(head_30, (word_12, ks_701, k_589) => {
                                          const s_188 = thirdPerson_3.value;
                                          const output_17 = ks_701.arena.fresh(false);
                                          function foreach_worker_50(l_43, ks_702, k_590) {
                                            foreach_worker_51: while (true) {
                                              switch (l_43.__tag) {
                                                case 0: 
                                                  return () =>
                                                    k_590($effekt.unit, ks_702);
                                                case 1: 
                                                  const head_32 = l_43.head_0;
                                                  const tail_33 = l_43.tail_0;
                                                  if (head_32 === "ala") {
                                                    output_17.value = true;
                                                    /* prepare call */
                                                    l_43 = tail_33;
                                                    continue foreach_worker_51;
                                                  } else {
                                                    /* prepare call */
                                                    l_43 = tail_33;
                                                    continue foreach_worker_51;
                                                  }
                                                  break;
                                              }
                                            }
                                          }
                                          return foreach_worker_50(modifiers_9, ks_701, (_135, ks_703) => {
                                            const s_189 = output_17.value;
                                            return translateWord_0(word_12, new Object_0(), s_188, s_189, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_703, (tmp_274, ks_704) => {
                                              DEALLOC(output_17);
                                              return () =>
                                                k_589(tmp_274, ks_704);
                                            });
                                          });
                                        }, ks_698, (v_r_123, ks_705) =>
                                          map_0(modifiers_9, (word_13, ks_706, k_591) => {
                                            const s_190 = thirdPerson_3.value;
                                            const s_191 = negate_1.value;
                                            return translateWord_0(word_13, new Adjective_0(), s_190, s_191, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_706, k_591);
                                          }, ks_705, (v_r_124, ks_707) => {
                                            DEALLOC(n_14);
                                            return () =>
                                              k_577(new AdverbLeaf_0(v_r_123, v_r_124), ks_707);
                                          }));
                                      }
                                    });
                                  default: 
                                    return () =>
                                      k_577(new Empty_0(), ks_670);
                                }
                                break;
                              case 5: 
                                const preverb_2 = tokiPonaTree_0.preverb_0;
                                const head_33 = tokiPonaTree_0.head_3;
                                const modifiers_10 = tokiPonaTree_0.modifiers_2;
                                return map_0(preverb_2, (word_14, ks_708, k_592) => {
                                  const s_192 = thirdPerson_3.value;
                                  return translateWord_0(word_14, new Preverb_0(), s_192, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_708, k_592);
                                }, ks_670, (v_r_125, ks_709) =>
                                  map_0(head_33, (word_15, ks_710, k_593) => {
                                    const s_193 = thirdPerson_3.value;
                                    if (s_193) {
                                      return modifierContainsAla_0(modifiers_10, ks_710, (v_r_126, ks_711) => {
                                        const s_194 = negate_1.value;
                                        return translateWord_0(word_15, new Verb_0(), !v_r_126, s_194, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_711, k_593);
                                      });
                                    } else {
                                      const s_195 = negate_1.value;
                                      return translateWord_0(word_15, new Verb_0(), false, s_195, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_710, k_593);
                                    }
                                  }, ks_709, (v_r_127, ks_712) =>
                                    map_0(modifiers_10, (x_11, ks_713, k_594) =>
                                      convertSyntaxTreeHelper_worker_0(x_11, new Adverb_0(), ks_713, k_594), ks_712, (v_r_128, ks_714) =>
                                      modifierContainsAla_0(modifiers_10, ks_714, (v_r_129, ks_715) => {
                                        if (v_r_129) {
                                          const s_196 = thirdPerson_3.value;
                                          if (s_196) {
                                            return () =>
                                              k_577(new EnglishVerbLeaf_0(v_r_125, v_r_127, v_r_128, "doesnt"), ks_715);
                                          } else {
                                            return modifierContainsAla_0(modifiers_10, ks_715, (v_r_130, ks_716) => {
                                              if (v_r_130) {
                                                return () =>
                                                  k_577(new EnglishVerbLeaf_0(v_r_125, v_r_127, v_r_128, "dont"), ks_716);
                                              } else {
                                                return () =>
                                                  k_577(new EnglishVerbLeaf_0(v_r_125, v_r_127, v_r_128, ""), ks_716);
                                              }
                                            });
                                          }
                                        } else {
                                          return modifierContainsAla_0(modifiers_10, ks_715, (v_r_131, ks_717) => {
                                            if (v_r_131) {
                                              return () =>
                                                k_577(new EnglishVerbLeaf_0(v_r_125, v_r_127, v_r_128, "dont"), ks_717);
                                            } else {
                                              return () =>
                                                k_577(new EnglishVerbLeaf_0(v_r_125, v_r_127, v_r_128, ""), ks_717);
                                            }
                                          });
                                        }
                                      }))));
                              case 7: 
                                const head_34 = tokiPonaTree_0.head_5;
                                const modifiers_11 = tokiPonaTree_0.modifiers_4;
                                return map_0(head_34, (word_16, ks_718, k_595) => {
                                  const s_197 = thirdPerson_3.value;
                                  return translateWord_0(word_16, new Object_0(), s_197, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_718, k_595);
                                }, ks_670, (v_r_132, ks_719) =>
                                  map_0(modifiers_11, (x_12, ks_720, k_596) =>
                                    convertSyntaxTreeHelper_worker_0(x_12, new Adjective_0(), ks_720, k_596), ks_719, (v_r_133, ks_721) =>
                                    () =>
                                      k_577(new ObjectLeaf_0(v_r_132, v_r_133), ks_721)));
                              case 8: 
                                const head_35 = tokiPonaTree_0.head_6;
                                const modifiers_12 = tokiPonaTree_0.modifiers_5;
                                return map_0(head_35, (word_17, ks_722, k_597) => {
                                  const s_198 = thirdPerson_3.value;
                                  return translateWord_0(word_17, new Subject_0(), s_198, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_722, k_597);
                                }, ks_670, (v_r_134, ks_723) =>
                                  map_0(modifiers_12, (x_13, ks_724, k_598) =>
                                    convertSyntaxTreeHelper_worker_0(x_13, new Adjective_0(), ks_724, k_598), ks_723, (v_r_135, ks_725) =>
                                    () =>
                                      k_577(new SubjectLeaf_0(v_r_134, v_r_135), ks_725)));
                              case 9: 
                                const prep_1 = tokiPonaTree_0.prep_0;
                                const head_36 = tokiPonaTree_0.head_7;
                                const modifiers_13 = tokiPonaTree_0.modifiers_6;
                                return map_0(prep_1, (word_18, ks_726, k_599) => {
                                  const s_199 = thirdPerson_3.value;
                                  return translateWord_0(word_18, new Preposition_0(), s_199, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_726, k_599);
                                }, ks_670, (v_r_136, ks_727) =>
                                  map_0(head_36, (word_19, ks_728, k_600) => {
                                    const s_200 = thirdPerson_3.value;
                                    return translateWord_0(word_19, new Object_0(), s_200, false, ambiguity_6, negateNext_2, setSubjectPerson_6, ks_728, k_600);
                                  }, ks_727, (v_r_137, ks_729) =>
                                    map_0(modifiers_13, (x_14, ks_730, k_601) =>
                                      convertSyntaxTreeHelper_worker_0(x_14, new Adjective_0(), ks_730, k_601), ks_729, (v_r_138, ks_731) =>
                                      () =>
                                        k_577(new PrepositionsLeaf_0(v_r_136, v_r_137, v_r_138), ks_731))));
                              default: 
                                return () => k_577(new Empty_0(), ks_670);
                            }
                          }
                        }
                        return convertSyntaxTreeHelper_worker_0(tmp_272, new Nothing_0(), ks_667, (tmp_275, ks_732) => {
                          DEALLOC(counter_0);
                          DEALLOC(storage_0);
                          DEALLOC(negate_1);
                          DEALLOC(firstPerson_0);
                          DEALLOC(thirdPerson_3);
                          const output_18 = ks_732.arena.fresh("");
                          const storage_1 = ks_732.arena.fresh("");
                          function deconstructSyntaxTreeHelper_worker_0(index_20, englishTree_0, ks_735, k_604) {
                            switch (englishTree_0.__tag) {
                              case 1: 
                                const subjects_3 = englishTree_0.subjects_0;
                                const predicates_3 = englishTree_0.predicates_0;
                                function loop_4(index_18, remainder_2, ks_733, k_602) {
                                  switch (remainder_2.__tag) {
                                    case 0: 
                                      return () =>
                                        k_602($effekt.unit, ks_733);
                                    case 1: 
                                      const head_37 = remainder_2.head_0;
                                      const tail_34 = remainder_2.tail_0;
                                      return deconstructSyntaxTreeHelper_worker_0(index_18, head_37, ks_733, (_136, ks_734) =>
                                        loop_4((index_18 + (1)), tail_34, ks_734, k_602));
                                  }
                                }
                                return loop_4(0, subjects_3, ks_735, (_137, ks_736) => {
                                  function loop_5(index_19, remainder_3, ks_737, k_603) {
                                    switch (remainder_3.__tag) {
                                      case 0: 
                                        return () =>
                                          k_603($effekt.unit, ks_737);
                                      case 1: 
                                        const head_38 = remainder_3.head_0;
                                        const tail_35 = remainder_3.tail_0;
                                        return deconstructSyntaxTreeHelper_worker_0(index_19, head_38, ks_737, (_138, ks_738) =>
                                          loop_5((index_19 + (1)), tail_35, ks_738, k_603));
                                    }
                                  }
                                  return loop_5(0, predicates_3, ks_736, k_604);
                                });
                              case 2: 
                                const verb_2 = englishTree_0.verb_0;
                                const objects_2 = englishTree_0.objects_0;
                                const prepositions_2 = englishTree_0.prepositions_0;
                                let _139 = undefined;
                                if (index_20 !== (0)) if (!("and" === "")) {
                                  const s_201 = output_18.value;
                                  output_18.value = (((((s_201) + ("and")))) + (" "));
                                  _139 = $effekt.unit;
                                } else {
                                  _139 = $effekt.unit;
                                } else {
                                  _139 = $effekt.unit;
                                }
                                switch (verb_2.__tag) {
                                  case 6: 
                                    const preverb_3 = verb_2.preverb_1;
                                    const head_39 = verb_2.head_4;
                                    const modifiers_14 = verb_2.modifiers_3;
                                    const negation_1 = verb_2.negation_0;
                                    let _140 = undefined;
                                    if (!(negation_1 === "")) {
                                      const s_202 = output_18.value;
                                      output_18.value = (((((s_202) + (negation_1)))) + (" "));
                                      _140 = $effekt.unit;
                                    } else {
                                      _140 = $effekt.unit;
                                    }
                                    function foreach_worker_52(l_44, ks_739, k_605) {
                                      foreach_worker_53: while (true) {
                                        switch (l_44.__tag) {
                                          case 0: 
                                            return () =>
                                              k_605($effekt.unit, ks_739);
                                          case 1: 
                                            const head_40 = l_44.head_0;
                                            const tail_36 = l_44.tail_0;
                                            if (!(head_40 === "")) {
                                              const s_203 = output_18.value;
                                              output_18.value = (((((s_203) + (head_40)))) + (" "));
                                              /* prepare call */
                                              l_44 = tail_36;
                                              continue foreach_worker_53;
                                            } else {
                                              /* prepare call */
                                              l_44 = tail_36;
                                              continue foreach_worker_53;
                                            }
                                            break;
                                        }
                                      }
                                    }
                                    return foreach_worker_52(preverb_3, ks_735, (_141, ks_740) => {
                                      function foreach_worker_54(l_45, ks_741, k_606) {
                                        foreach_worker_55: while (true) {
                                          switch (l_45.__tag) {
                                            case 0: 
                                              return () =>
                                                k_606($effekt.unit, ks_741);
                                            case 1: 
                                              const head_41 = l_45.head_0;
                                              const tail_37 = l_45.tail_0;
                                              if (!(head_41 === "")) {
                                                const s_204 = output_18.value;
                                                output_18.value = (((((s_204) + (head_41)))) + (" "));
                                                /* prepare call */
                                                l_45 = tail_37;
                                                continue foreach_worker_55;
                                              } else {
                                                /* prepare call */
                                                l_45 = tail_37;
                                                continue foreach_worker_55;
                                              }
                                              break;
                                          }
                                        }
                                      }
                                      return foreach_worker_54(head_39, ks_740, (_142, ks_742) => {
                                        function loop_6(index_21, remainder_4, ks_743, k_607) {
                                          switch (remainder_4.__tag) {
                                            case 0: 
                                              return () =>
                                                k_607($effekt.unit, ks_743);
                                            case 1: 
                                              const head_42 = remainder_4.head_0;
                                              const tail_38 = remainder_4.tail_0;
                                              return deconstructSyntaxTreeHelper_worker_0(index_21, head_42, ks_743, (_143, ks_744) =>
                                                loop_6((index_21 + (1)), tail_38, ks_744, k_607));
                                          }
                                        }
                                        return loop_6(0, objects_2, ks_742, (_144, ks_745) => {
                                          function loop_7(index_22, remainder_5, ks_746, k_608) {
                                            switch (remainder_5.__tag) {
                                              case 0: 
                                                return () =>
                                                  k_608($effekt.unit, ks_746);
                                              case 1: 
                                                const head_43 = remainder_5.head_0;
                                                const tail_39 = remainder_5.tail_0;
                                                return deconstructSyntaxTreeHelper_worker_0(index_22, head_43, ks_746, (_145, ks_747) =>
                                                  loop_7((index_22 + (1)), tail_39, ks_747, k_608));
                                            }
                                          }
                                          return loop_7(0, modifiers_14, ks_745, (_146, ks_748) => {
                                            function loop_8(index_23, remainder_6, ks_749, k_609) {
                                              switch (remainder_6.__tag) {
                                                case 0: 
                                                  return () =>
                                                    k_609($effekt.unit, ks_749);
                                                case 1: 
                                                  const head_44 = remainder_6.head_0;
                                                  const tail_40 = remainder_6.tail_0;
                                                  return deconstructSyntaxTreeHelper_worker_0(index_23, head_44, ks_749, (_147, ks_750) =>
                                                    loop_8((index_23 + (1)), tail_40, ks_750, k_609));
                                              }
                                            }
                                            return loop_8(0, prepositions_2, ks_748, k_604);
                                          });
                                        });
                                      });
                                    });
                                  default: 
                                    return () =>
                                      k_604($effekt.unit, ks_735);
                                }
                                break;
                              case 3: 
                                const head_45 = englishTree_0.head_1;
                                const modifiers_15 = englishTree_0.modifiers_0;
                                const n_15 = ks_735.arena.fresh(0);
                                function foreach_worker_56(l_46, ks_751, k_610) {
                                  foreach_worker_57: while (true) {
                                    switch (l_46.__tag) {
                                      case 0: 
                                        return () =>
                                          k_610($effekt.unit, ks_751);
                                      case 1: 
                                        const tail_41 = l_46.tail_0;
                                        const s_205 = n_15.value;
                                        n_15.value = (s_205 + (1));
                                        /* prepare call */
                                        l_46 = tail_41;
                                        continue foreach_worker_57;
                                    }
                                  }
                                }
                                return foreach_worker_56(modifiers_15, ks_735, (_148, ks_752) => {
                                  const s_206 = n_15.value;
                                  if (s_206 === (0)) {
                                    return showSentence_0(head_45, ks_752, (v_r_139, ks_753) => {
                                      if (!(v_r_139 === "")) {
                                        const s_207 = output_18.value;
                                        output_18.value = (((((s_207) + (v_r_139)))) + (" "));
                                        DEALLOC(n_15);
                                        return () =>
                                          k_604($effekt.unit, ks_753);
                                      } else {
                                        DEALLOC(n_15);
                                        return () =>
                                          k_604($effekt.unit, ks_753);
                                      }
                                    });
                                  } else {
                                    return flatten_0(modifiers_15, (a_3, b_0, ks_754, k_611) =>
                                      () =>
                                        k_611((((((a_3) + ("-")))) + (b_0)), ks_754), ks_752, (v_r_140, ks_755) =>
                                      showSentence_0(head_45, ks_755, (v_r_141, ks_756) => {
                                        const tmp_276 = ((((((((v_r_140) + ("-")))) + (v_r_141)))) + (" related"));
                                        if (!(tmp_276 === "")) {
                                          const s_208 = output_18.value;
                                          output_18.value = (((((s_208) + (tmp_276)))) + (" "));
                                          DEALLOC(n_15);
                                          return () =>
                                            k_604($effekt.unit, ks_756);
                                        } else {
                                          DEALLOC(n_15);
                                          return () =>
                                            k_604($effekt.unit, ks_756);
                                        }
                                      }));
                                  }
                                });
                              case 4: 
                                const head_46 = englishTree_0.head_2;
                                const modifiers_16 = englishTree_0.modifiers_1;
                                let _149 = undefined;
                                if (index_20 !== (0)) if (!("and" === "")) {
                                  const s_209 = output_18.value;
                                  output_18.value = (((((s_209) + ("and")))) + (" "));
                                  _149 = $effekt.unit;
                                } else {
                                  _149 = $effekt.unit;
                                } else {
                                  _149 = $effekt.unit;
                                }
                                const n_16 = ks_735.arena.fresh(0);
                                function foreach_worker_58(l_47, ks_757, k_612) {
                                  foreach_worker_59: while (true) {
                                    switch (l_47.__tag) {
                                      case 0: 
                                        return () =>
                                          k_612($effekt.unit, ks_757);
                                      case 1: 
                                        const tail_42 = l_47.tail_0;
                                        const s_210 = n_16.value;
                                        n_16.value = (s_210 + (1));
                                        /* prepare call */
                                        l_47 = tail_42;
                                        continue foreach_worker_59;
                                    }
                                  }
                                }
                                return foreach_worker_58(modifiers_16, ks_735, (_150, ks_758) => {
                                  const s_211 = n_16.value;
                                  if (s_211 === (0)) {
                                    return showSentence_0(head_46, ks_758, (v_r_142, ks_759) => {
                                      if (!(v_r_142 === "")) {
                                        const s_212 = output_18.value;
                                        output_18.value = (((((s_212) + (v_r_142)))) + (" "));
                                        DEALLOC(n_16);
                                        return () =>
                                          k_604($effekt.unit, ks_759);
                                      } else {
                                        DEALLOC(n_16);
                                        return () =>
                                          k_604($effekt.unit, ks_759);
                                      }
                                    });
                                  } else {
                                    return flatten_0(modifiers_16, (a_4, b_1, ks_760, k_613) =>
                                      () =>
                                        k_613((((((((("In a") + (a_4)))) + ("-")))) + (b_1)), ks_760), ks_758, (v_r_143, ks_761) =>
                                      showSentence_0(head_46, ks_761, (v_r_144, ks_762) => {
                                        const tmp_277 = ((((((((v_r_143) + ("-")))) + (v_r_144)))) + (" related way"));
                                        if (!(tmp_277 === "")) {
                                          const s_213 = output_18.value;
                                          output_18.value = (((((s_213) + (tmp_277)))) + (" "));
                                          DEALLOC(n_16);
                                          return () =>
                                            k_604($effekt.unit, ks_762);
                                        } else {
                                          DEALLOC(n_16);
                                          return () =>
                                            k_604($effekt.unit, ks_762);
                                        }
                                      }));
                                  }
                                });
                              case 8: 
                                const head_47 = englishTree_0.head_6;
                                const modifiers_17 = englishTree_0.modifiers_5;
                                let _151 = undefined;
                                if (index_20 !== (0)) if (!("and" === "")) {
                                  const s_214 = output_18.value;
                                  output_18.value = (((((s_214) + ("and")))) + (" "));
                                  _151 = $effekt.unit;
                                } else {
                                  _151 = $effekt.unit;
                                } else {
                                  _151 = $effekt.unit;
                                }
                                const res_10 = ks_735.arena.fresh(new Nil_0());
                                function foreach_worker_60(l_48, ks_763, k_614) {
                                  foreach_worker_61: while (true) {
                                    switch (l_48.__tag) {
                                      case 0: 
                                        return () =>
                                          k_614($effekt.unit, ks_763);
                                      case 1: 
                                        const head_48 = l_48.head_0;
                                        const tail_43 = l_48.tail_0;
                                        const s_215 = res_10.value;
                                        res_10.value = new Cons_0(head_48, s_215);
                                        /* prepare call */
                                        l_48 = tail_43;
                                        continue foreach_worker_61;
                                    }
                                  }
                                }
                                return foreach_worker_60(modifiers_17, ks_735, (_152, ks_764) => {
                                  const s_216 = res_10.value;
                                  function loop_9(index_24, remainder_7, ks_765, k_615) {
                                    switch (remainder_7.__tag) {
                                      case 0: 
                                        return () =>
                                          k_615($effekt.unit, ks_765);
                                      case 1: 
                                        const head_49 = remainder_7.head_0;
                                        const tail_44 = remainder_7.tail_0;
                                        return deconstructSyntaxTreeHelper_worker_0(index_24, head_49, ks_765, (_153, ks_766) =>
                                          loop_9((index_24 + (1)), tail_44, ks_766, k_615));
                                    }
                                  }
                                  return loop_9(0, s_216, ks_764, (_154, ks_767) => {
                                    function foreach_worker_62(l_49, ks_768, k_616) {
                                      foreach_worker_63: while (true) {
                                        switch (l_49.__tag) {
                                          case 0: 
                                            return () =>
                                              k_616($effekt.unit, ks_768);
                                          case 1: 
                                            const head_50 = l_49.head_0;
                                            const tail_45 = l_49.tail_0;
                                            if (!(head_50 === "")) {
                                              const s_217 = output_18.value;
                                              output_18.value = (((((s_217) + (head_50)))) + (" "));
                                              /* prepare call */
                                              l_49 = tail_45;
                                              continue foreach_worker_63;
                                            } else {
                                              /* prepare call */
                                              l_49 = tail_45;
                                              continue foreach_worker_63;
                                            }
                                            break;
                                        }
                                      }
                                    }
                                    return foreach_worker_62(head_47, ks_767, (tmp_278, ks_769) => {
                                      DEALLOC(res_10);
                                      return () => k_604(tmp_278, ks_769);
                                    });
                                  });
                                });
                              case 7: 
                                const head_51 = englishTree_0.head_5;
                                const modifiers_18 = englishTree_0.modifiers_4;
                                let _155 = undefined;
                                if (index_20 !== (0)) if (!("and" === "")) {
                                  const s_218 = output_18.value;
                                  output_18.value = (((((s_218) + ("and")))) + (" "));
                                  _155 = $effekt.unit;
                                } else {
                                  _155 = $effekt.unit;
                                } else {
                                  _155 = $effekt.unit;
                                }
                                const res_11 = ks_735.arena.fresh(new Nil_0());
                                function foreach_worker_64(l_50, ks_770, k_617) {
                                  foreach_worker_65: while (true) {
                                    switch (l_50.__tag) {
                                      case 0: 
                                        return () =>
                                          k_617($effekt.unit, ks_770);
                                      case 1: 
                                        const head_52 = l_50.head_0;
                                        const tail_46 = l_50.tail_0;
                                        const s_219 = res_11.value;
                                        res_11.value = new Cons_0(head_52, s_219);
                                        /* prepare call */
                                        l_50 = tail_46;
                                        continue foreach_worker_65;
                                    }
                                  }
                                }
                                return foreach_worker_64(modifiers_18, ks_735, (_156, ks_771) => {
                                  const s_220 = res_11.value;
                                  function loop_10(index_25, remainder_8, ks_772, k_618) {
                                    switch (remainder_8.__tag) {
                                      case 0: 
                                        return () =>
                                          k_618($effekt.unit, ks_772);
                                      case 1: 
                                        const head_53 = remainder_8.head_0;
                                        const tail_47 = remainder_8.tail_0;
                                        return deconstructSyntaxTreeHelper_worker_0(index_25, head_53, ks_772, (_157, ks_773) =>
                                          loop_10((index_25 + (1)), tail_47, ks_773, k_618));
                                    }
                                  }
                                  return loop_10(0, s_220, ks_771, (_158, ks_774) => {
                                    function foreach_worker_66(l_51, ks_775, k_619) {
                                      foreach_worker_67: while (true) {
                                        switch (l_51.__tag) {
                                          case 0: 
                                            return () =>
                                              k_619($effekt.unit, ks_775);
                                          case 1: 
                                            const head_54 = l_51.head_0;
                                            const tail_48 = l_51.tail_0;
                                            if (!(head_54 === "")) {
                                              const s_221 = output_18.value;
                                              output_18.value = (((((s_221) + (head_54)))) + (" "));
                                              /* prepare call */
                                              l_51 = tail_48;
                                              continue foreach_worker_67;
                                            } else {
                                              /* prepare call */
                                              l_51 = tail_48;
                                              continue foreach_worker_67;
                                            }
                                            break;
                                        }
                                      }
                                    }
                                    return foreach_worker_66(head_51, ks_774, (tmp_279, ks_776) => {
                                      DEALLOC(res_11);
                                      return () => k_604(tmp_279, ks_776);
                                    });
                                  });
                                });
                              case 9: 
                                const prep_2 = englishTree_0.prep_0;
                                const head_55 = englishTree_0.head_7;
                                const modifiers_19 = englishTree_0.modifiers_6;
                                let _159 = undefined;
                                if (index_20 !== (0)) if (!("and" === "")) {
                                  const s_222 = output_18.value;
                                  output_18.value = (((((s_222) + ("and")))) + (" "));
                                  _159 = $effekt.unit;
                                } else {
                                  _159 = $effekt.unit;
                                } else {
                                  _159 = $effekt.unit;
                                }
                                function foreach_worker_68(l_52, ks_777, k_620) {
                                  foreach_worker_69: while (true) {
                                    switch (l_52.__tag) {
                                      case 0: 
                                        return () =>
                                          k_620($effekt.unit, ks_777);
                                      case 1: 
                                        const head_56 = l_52.head_0;
                                        const tail_49 = l_52.tail_0;
                                        if (!(head_56 === "")) {
                                          const s_223 = output_18.value;
                                          output_18.value = (((((s_223) + (head_56)))) + (" "));
                                          /* prepare call */
                                          l_52 = tail_49;
                                          continue foreach_worker_69;
                                        } else {
                                          /* prepare call */
                                          l_52 = tail_49;
                                          continue foreach_worker_69;
                                        }
                                        break;
                                    }
                                  }
                                }
                                return foreach_worker_68(prep_2, ks_735, (_160, ks_778) => {
                                  const res_12 = ks_778.arena.fresh(new Nil_0());
                                  function foreach_worker_70(l_53, ks_779, k_621) {
                                    foreach_worker_71: while (true) {
                                      switch (l_53.__tag) {
                                        case 0: 
                                          return () =>
                                            k_621($effekt.unit, ks_779);
                                        case 1: 
                                          const head_57 = l_53.head_0;
                                          const tail_50 = l_53.tail_0;
                                          const s_224 = res_12.value;
                                          res_12.value = new Cons_0(head_57, s_224);
                                          /* prepare call */
                                          l_53 = tail_50;
                                          continue foreach_worker_71;
                                      }
                                    }
                                  }
                                  return foreach_worker_70(modifiers_19, ks_778, (_161, ks_780) => {
                                    const s_225 = res_12.value;
                                    function loop_11(index_26, remainder_9, ks_781, k_622) {
                                      switch (remainder_9.__tag) {
                                        case 0: 
                                          return () =>
                                            k_622($effekt.unit, ks_781);
                                        case 1: 
                                          const head_58 = remainder_9.head_0;
                                          const tail_51 = remainder_9.tail_0;
                                          return deconstructSyntaxTreeHelper_worker_0(index_26, head_58, ks_781, (_162, ks_782) =>
                                            loop_11((index_26 + (1)), tail_51, ks_782, k_622));
                                      }
                                    }
                                    return loop_11(0, s_225, ks_780, (_163, ks_783) => {
                                      function foreach_worker_72(l_54, ks_784, k_623) {
                                        foreach_worker_73: while (true) {
                                          switch (l_54.__tag) {
                                            case 0: 
                                              return () =>
                                                k_623($effekt.unit, ks_784);
                                            case 1: 
                                              const head_59 = l_54.head_0;
                                              const tail_52 = l_54.tail_0;
                                              if (!(head_59 === "")) {
                                                const s_226 = output_18.value;
                                                output_18.value = (((((s_226) + (head_59)))) + (" "));
                                                /* prepare call */
                                                l_54 = tail_52;
                                                continue foreach_worker_73;
                                              } else {
                                                /* prepare call */
                                                l_54 = tail_52;
                                                continue foreach_worker_73;
                                              }
                                              break;
                                          }
                                        }
                                      }
                                      return foreach_worker_72(head_55, ks_783, (tmp_280, ks_785) => {
                                        DEALLOC(res_12);
                                        return () => k_604(tmp_280, ks_785);
                                      });
                                    });
                                  });
                                });
                              default: 
                                return () => k_604($effekt.unit, ks_735);
                            }
                          }
                          return deconstructSyntaxTreeHelper_worker_0(0, tmp_275, ks_732, (_164, ks_786) => {
                            const s_227 = output_18.value;
                            const s_228 = output_13.value;
                            return take_0(s_228, 0, ks_786, (v_r_145, ks_787) =>
                              drop_0(s_228, 0, ks_787, (v_r_146, ks_788) => {
                                const res_13 = ks_788.arena.fresh(new Nil_0());
                                function foreach_worker_74(l_55, ks_789, k_624) {
                                  foreach_worker_75: while (true) {
                                    switch (l_55.__tag) {
                                      case 0: 
                                        return () =>
                                          k_624($effekt.unit, ks_789);
                                      case 1: 
                                        const head_60 = l_55.head_0;
                                        const tail_53 = l_55.tail_0;
                                        const s_229 = res_13.value;
                                        res_13.value = new Cons_0(head_60, s_229);
                                        /* prepare call */
                                        l_55 = tail_53;
                                        continue foreach_worker_75;
                                    }
                                  }
                                }
                                return foreach_worker_74(v_r_145, ks_788, (_165, ks_790) => {
                                  const s_230 = res_13.value;
                                  return reverseOnto_0(s_230, new Cons_0(s_227, v_r_146), ks_790, (v_r_147, ks_791) => {
                                    output_13.value = v_r_147;
                                    DEALLOC(res_13);
                                    DEALLOC(storage_1);
                                    DEALLOC(output_18);
                                    return () =>
                                      k_542($effekt.unit, ks_791);
                                  });
                                });
                              }));
                          });
                        });
                      });
                    });
                  }, ks_553, (_166, ks_792) => {
                    const s_231 = output_13.value;
                    function foreach_worker_76(l_56, ks_793, k_625) {
                      foreach_worker_77: while (true) {
                        switch (l_56.__tag) {
                          case 0: 
                            return () => k_625($effekt.unit, ks_793);
                          case 1: 
                            const head_61 = l_56.head_0;
                            const tail_54 = l_56.tail_0;
                            const s_232 = output_12.value;
                            output_12.value = (((((s_232) + (head_61)))) + ("\n"));
                            /* prepare call */
                            l_56 = tail_54;
                            continue foreach_worker_77;
                        }
                      }
                    }
                    return foreach_worker_76(s_231, ks_792, (_167, ks_794) =>
                      foreach_worker_18(tail_14, ks_794, (tmp_281, ks_795) => {
                        DEALLOC(output_13);
                        return () => k_541(tmp_281, ks_795);
                      }));
                  });
              }
            }
            return foreach_worker_18(s_145, ks_552, (_168, ks_796) => {
              const s_233 = output_12.value;
              return openForWriting_0("Data.txt", ks_796, (v_r_148, ks_797) => {
                let file_4 = undefined;
                if ((v_r_148 < (0))) {
                  const tmp_282 = errorNumber(v_r_148);
                  function l_57(ioError_3, ks_799, k_782) {
                    switch (ioError_3.__tag) {
                      case 0: 
                        return SHIFT(p_5, (k_626, ks_798, k_627) => {
                          const tmp_283 = $effekt.println("argument list too long");
                          return () => k_627(tmp_283, ks_798);
                        }, ks_799, undefined);
                      case 1: 
                        return SHIFT(p_5, (k_628, ks_800, k_629) => {
                          const tmp_284 = $effekt.println("permission denied");
                          return () => k_629(tmp_284, ks_800);
                        }, ks_799, undefined);
                      case 2: 
                        return SHIFT(p_5, (k_630, ks_801, k_631) => {
                          const tmp_285 = $effekt.println("address already in use");
                          return () => k_631(tmp_285, ks_801);
                        }, ks_799, undefined);
                      case 3: 
                        return SHIFT(p_5, (k_632, ks_802, k_633) => {
                          const tmp_286 = $effekt.println("address not available");
                          return () => k_633(tmp_286, ks_802);
                        }, ks_799, undefined);
                      case 4: 
                        return SHIFT(p_5, (k_634, ks_803, k_635) => {
                          const tmp_287 = $effekt.println("address family not supported");
                          return () => k_635(tmp_287, ks_803);
                        }, ks_799, undefined);
                      case 5: 
                        return SHIFT(p_5, (k_636, ks_804, k_637) => {
                          const tmp_288 = $effekt.println("resource temporarily unavailable");
                          return () => k_637(tmp_288, ks_804);
                        }, ks_799, undefined);
                      case 6: 
                        return SHIFT(p_5, (k_638, ks_805, k_639) => {
                          const tmp_289 = $effekt.println("address family not supported");
                          return () => k_639(tmp_289, ks_805);
                        }, ks_799, undefined);
                      case 7: 
                        return SHIFT(p_5, (k_640, ks_806, k_641) => {
                          const tmp_290 = $effekt.println("temporary failure");
                          return () => k_641(tmp_290, ks_806);
                        }, ks_799, undefined);
                      case 8: 
                        return SHIFT(p_5, (k_642, ks_807, k_643) => {
                          const tmp_291 = $effekt.println("bad ai_flags value");
                          return () => k_643(tmp_291, ks_807);
                        }, ks_799, undefined);
                      case 9: 
                        return SHIFT(p_5, (k_644, ks_808, k_645) => {
                          const tmp_292 = $effekt.println("invalid value for hints");
                          return () => k_645(tmp_292, ks_808);
                        }, ks_799, undefined);
                      case 10: 
                        return SHIFT(p_5, (k_646, ks_809, k_647) => {
                          const tmp_293 = $effekt.println("request canceled");
                          return () => k_647(tmp_293, ks_809);
                        }, ks_799, undefined);
                      case 11: 
                        return SHIFT(p_5, (k_648, ks_810, k_649) => {
                          const tmp_294 = $effekt.println("permanent failure");
                          return () => k_649(tmp_294, ks_810);
                        }, ks_799, undefined);
                      case 12: 
                        return SHIFT(p_5, (k_650, ks_811, k_651) => {
                          const tmp_295 = $effekt.println("ai_family not supported");
                          return () => k_651(tmp_295, ks_811);
                        }, ks_799, undefined);
                      case 13: 
                        return SHIFT(p_5, (k_652, ks_812, k_653) => {
                          const tmp_296 = $effekt.println("out of memory");
                          return () => k_653(tmp_296, ks_812);
                        }, ks_799, undefined);
                      case 14: 
                        return SHIFT(p_5, (k_654, ks_813, k_655) => {
                          const tmp_297 = $effekt.println("no address");
                          return () => k_655(tmp_297, ks_813);
                        }, ks_799, undefined);
                      case 15: 
                        return SHIFT(p_5, (k_656, ks_814, k_657) => {
                          const tmp_298 = $effekt.println("unknown node or service");
                          return () => k_657(tmp_298, ks_814);
                        }, ks_799, undefined);
                      case 16: 
                        return SHIFT(p_5, (k_658, ks_815, k_659) => {
                          const tmp_299 = $effekt.println("argument buffer overflow");
                          return () => k_659(tmp_299, ks_815);
                        }, ks_799, undefined);
                      case 17: 
                        return SHIFT(p_5, (k_660, ks_816, k_661) => {
                          const tmp_300 = $effekt.println("resolved protocol is unknown");
                          return () => k_661(tmp_300, ks_816);
                        }, ks_799, undefined);
                      case 18: 
                        return SHIFT(p_5, (k_662, ks_817, k_663) => {
                          const tmp_301 = $effekt.println("service not available for socket type");
                          return () => k_663(tmp_301, ks_817);
                        }, ks_799, undefined);
                      case 19: 
                        return SHIFT(p_5, (k_664, ks_818, k_665) => {
                          const tmp_302 = $effekt.println("socket type not supported");
                          return () => k_665(tmp_302, ks_818);
                        }, ks_799, undefined);
                      case 20: 
                        return SHIFT(p_5, (k_666, ks_819, k_667) => {
                          const tmp_303 = $effekt.println("connection already in progress");
                          return () => k_667(tmp_303, ks_819);
                        }, ks_799, undefined);
                      case 21: 
                        return SHIFT(p_5, (k_668, ks_820, k_669) => {
                          const tmp_304 = $effekt.println("bad file descriptor");
                          return () => k_669(tmp_304, ks_820);
                        }, ks_799, undefined);
                      case 22: 
                        return SHIFT(p_5, (k_670, ks_821, k_671) => {
                          const tmp_305 = $effekt.println("resource busy or locked");
                          return () => k_671(tmp_305, ks_821);
                        }, ks_799, undefined);
                      case 23: 
                        return SHIFT(p_5, (k_672, ks_822, k_673) => {
                          const tmp_306 = $effekt.println("operation canceled");
                          return () => k_673(tmp_306, ks_822);
                        }, ks_799, undefined);
                      case 24: 
                        return SHIFT(p_5, (k_674, ks_823, k_675) => {
                          const tmp_307 = $effekt.println("invalid Unicode character");
                          return () => k_675(tmp_307, ks_823);
                        }, ks_799, undefined);
                      case 25: 
                        return SHIFT(p_5, (k_676, ks_824, k_677) => {
                          const tmp_308 = $effekt.println("software caused connection abort");
                          return () => k_677(tmp_308, ks_824);
                        }, ks_799, undefined);
                      case 26: 
                        return SHIFT(p_5, (k_678, ks_825, k_679) => {
                          const tmp_309 = $effekt.println("connection refused");
                          return () => k_679(tmp_309, ks_825);
                        }, ks_799, undefined);
                      case 27: 
                        return SHIFT(p_5, (k_680, ks_826, k_681) => {
                          const tmp_310 = $effekt.println("connection reset by peer");
                          return () => k_681(tmp_310, ks_826);
                        }, ks_799, undefined);
                      case 28: 
                        return SHIFT(p_5, (k_682, ks_827, k_683) => {
                          const tmp_311 = $effekt.println("destination address required");
                          return () => k_683(tmp_311, ks_827);
                        }, ks_799, undefined);
                      case 29: 
                        return SHIFT(p_5, (k_684, ks_828, k_685) => {
                          const tmp_312 = $effekt.println("file already exists");
                          return () => k_685(tmp_312, ks_828);
                        }, ks_799, undefined);
                      case 30: 
                        return SHIFT(p_5, (k_686, ks_829, k_687) => {
                          const tmp_313 = $effekt.println("bad address in system call argument");
                          return () => k_687(tmp_313, ks_829);
                        }, ks_799, undefined);
                      case 31: 
                        return SHIFT(p_5, (k_688, ks_830, k_689) => {
                          const tmp_314 = $effekt.println("file too large");
                          return () => k_689(tmp_314, ks_830);
                        }, ks_799, undefined);
                      case 32: 
                        return SHIFT(p_5, (k_690, ks_831, k_691) => {
                          const tmp_315 = $effekt.println("host is unreachable");
                          return () => k_691(tmp_315, ks_831);
                        }, ks_799, undefined);
                      case 33: 
                        return SHIFT(p_5, (k_692, ks_832, k_693) => {
                          const tmp_316 = $effekt.println("interrupted system call");
                          return () => k_693(tmp_316, ks_832);
                        }, ks_799, undefined);
                      case 34: 
                        return SHIFT(p_5, (k_694, ks_833, k_695) => {
                          const tmp_317 = $effekt.println("invalid argument");
                          return () => k_695(tmp_317, ks_833);
                        }, ks_799, undefined);
                      case 35: 
                        return SHIFT(p_5, (k_696, ks_834, k_697) => {
                          const tmp_318 = $effekt.println("i/o error");
                          return () => k_697(tmp_318, ks_834);
                        }, ks_799, undefined);
                      case 36: 
                        return SHIFT(p_5, (k_698, ks_835, k_699) => {
                          const tmp_319 = $effekt.println("socket is already connected");
                          return () => k_699(tmp_319, ks_835);
                        }, ks_799, undefined);
                      case 37: 
                        return SHIFT(p_5, (k_700, ks_836, k_701) => {
                          const tmp_320 = $effekt.println("illegal operation on a directory");
                          return () => k_701(tmp_320, ks_836);
                        }, ks_799, undefined);
                      case 38: 
                        return SHIFT(p_5, (k_702, ks_837, k_703) => {
                          const tmp_321 = $effekt.println("too many symbolic links encountered");
                          return () => k_703(tmp_321, ks_837);
                        }, ks_799, undefined);
                      case 39: 
                        return SHIFT(p_5, (k_704, ks_838, k_705) => {
                          const tmp_322 = $effekt.println("too many open files");
                          return () => k_705(tmp_322, ks_838);
                        }, ks_799, undefined);
                      case 40: 
                        return SHIFT(p_5, (k_706, ks_839, k_707) => {
                          const tmp_323 = $effekt.println("message too long");
                          return () => k_707(tmp_323, ks_839);
                        }, ks_799, undefined);
                      case 41: 
                        return SHIFT(p_5, (k_708, ks_840, k_709) => {
                          const tmp_324 = $effekt.println("name too long");
                          return () => k_709(tmp_324, ks_840);
                        }, ks_799, undefined);
                      case 42: 
                        return SHIFT(p_5, (k_710, ks_841, k_711) => {
                          const tmp_325 = $effekt.println("network is down");
                          return () => k_711(tmp_325, ks_841);
                        }, ks_799, undefined);
                      case 43: 
                        return SHIFT(p_5, (k_712, ks_842, k_713) => {
                          const tmp_326 = $effekt.println("network is unreachable");
                          return () => k_713(tmp_326, ks_842);
                        }, ks_799, undefined);
                      case 44: 
                        return SHIFT(p_5, (k_714, ks_843, k_715) => {
                          const tmp_327 = $effekt.println("file table overflow");
                          return () => k_715(tmp_327, ks_843);
                        }, ks_799, undefined);
                      case 45: 
                        return SHIFT(p_5, (k_716, ks_844, k_717) => {
                          const tmp_328 = $effekt.println("no buffer space available");
                          return () => k_717(tmp_328, ks_844);
                        }, ks_799, undefined);
                      case 46: 
                        return SHIFT(p_5, (k_718, ks_845, k_719) => {
                          const tmp_329 = $effekt.println("no such device");
                          return () => k_719(tmp_329, ks_845);
                        }, ks_799, undefined);
                      case 47: 
                        return SHIFT(p_5, (k_720, ks_846, k_721) => {
                          const tmp_330 = $effekt.println("no such file or directory");
                          return () => k_721(tmp_330, ks_846);
                        }, ks_799, undefined);
                      case 48: 
                        return SHIFT(p_5, (k_722, ks_847, k_723) => {
                          const tmp_331 = $effekt.println("not enough memory");
                          return () => k_723(tmp_331, ks_847);
                        }, ks_799, undefined);
                      case 49: 
                        return SHIFT(p_5, (k_724, ks_848, k_725) => {
                          const tmp_332 = $effekt.println("machine is not on the network");
                          return () => k_725(tmp_332, ks_848);
                        }, ks_799, undefined);
                      case 50: 
                        return SHIFT(p_5, (k_726, ks_849, k_727) => {
                          const tmp_333 = $effekt.println("protocol not available");
                          return () => k_727(tmp_333, ks_849);
                        }, ks_799, undefined);
                      case 51: 
                        return SHIFT(p_5, (k_728, ks_850, k_729) => {
                          const tmp_334 = $effekt.println("no space left on device");
                          return () => k_729(tmp_334, ks_850);
                        }, ks_799, undefined);
                      case 52: 
                        return SHIFT(p_5, (k_730, ks_851, k_731) => {
                          const tmp_335 = $effekt.println("socket is not connected");
                          return () => k_731(tmp_335, ks_851);
                        }, ks_799, undefined);
                      case 53: 
                        return SHIFT(p_5, (k_732, ks_852, k_733) => {
                          const tmp_336 = $effekt.println("not a directory");
                          return () => k_733(tmp_336, ks_852);
                        }, ks_799, undefined);
                      case 54: 
                        return SHIFT(p_5, (k_734, ks_853, k_735) => {
                          const tmp_337 = $effekt.println("socket operation on non-socket");
                          return () => k_735(tmp_337, ks_853);
                        }, ks_799, undefined);
                      case 55: 
                        return SHIFT(p_5, (k_736, ks_854, k_737) => {
                          const tmp_338 = $effekt.println("operation not supported on socket");
                          return () => k_737(tmp_338, ks_854);
                        }, ks_799, undefined);
                      case 56: 
                        return SHIFT(p_5, (k_738, ks_855, k_739) => {
                          const tmp_339 = $effekt.println("value too large for defined data type");
                          return () => k_739(tmp_339, ks_855);
                        }, ks_799, undefined);
                      case 57: 
                        return SHIFT(p_5, (k_740, ks_856, k_741) => {
                          const tmp_340 = $effekt.println("operation not permitted");
                          return () => k_741(tmp_340, ks_856);
                        }, ks_799, undefined);
                      case 58: 
                        return SHIFT(p_5, (k_742, ks_857, k_743) => {
                          const tmp_341 = $effekt.println("broken pipe");
                          return () => k_743(tmp_341, ks_857);
                        }, ks_799, undefined);
                      case 59: 
                        return SHIFT(p_5, (k_744, ks_858, k_745) => {
                          const tmp_342 = $effekt.println("protocol not supported");
                          return () => k_745(tmp_342, ks_858);
                        }, ks_799, undefined);
                      case 60: 
                        return SHIFT(p_5, (k_746, ks_859, k_747) => {
                          const tmp_343 = $effekt.println("protocol wrong type for socket");
                          return () => k_747(tmp_343, ks_859);
                        }, ks_799, undefined);
                      case 61: 
                        return SHIFT(p_5, (k_748, ks_860, k_749) => {
                          const tmp_344 = $effekt.println("result too large");
                          return () => k_749(tmp_344, ks_860);
                        }, ks_799, undefined);
                      case 62: 
                        return SHIFT(p_5, (k_750, ks_861, k_751) => {
                          const tmp_345 = $effekt.println("read-only file system");
                          return () => k_751(tmp_345, ks_861);
                        }, ks_799, undefined);
                      case 63: 
                        return SHIFT(p_5, (k_752, ks_862, k_753) => {
                          const tmp_346 = $effekt.println("cannot send after transport endpoint shutdown");
                          return () => k_753(tmp_346, ks_862);
                        }, ks_799, undefined);
                      case 64: 
                        return SHIFT(p_5, (k_754, ks_863, k_755) => {
                          const tmp_347 = $effekt.println("invalid seek");
                          return () => k_755(tmp_347, ks_863);
                        }, ks_799, undefined);
                      case 65: 
                        return SHIFT(p_5, (k_756, ks_864, k_757) => {
                          const tmp_348 = $effekt.println("no such process");
                          return () => k_757(tmp_348, ks_864);
                        }, ks_799, undefined);
                      case 66: 
                        return SHIFT(p_5, (k_758, ks_865, k_759) => {
                          const tmp_349 = $effekt.println("connection timed out");
                          return () => k_759(tmp_349, ks_865);
                        }, ks_799, undefined);
                      case 67: 
                        return SHIFT(p_5, (k_760, ks_866, k_761) => {
                          const tmp_350 = $effekt.println("text file is busy");
                          return () => k_761(tmp_350, ks_866);
                        }, ks_799, undefined);
                      case 68: 
                        return SHIFT(p_5, (k_762, ks_867, k_763) => {
                          const tmp_351 = $effekt.println("cross-device link not permitted");
                          return () => k_763(tmp_351, ks_867);
                        }, ks_799, undefined);
                      case 69: 
                        return SHIFT(p_5, (k_764, ks_868, k_765) => {
                          const tmp_352 = $effekt.println("unknown error");
                          return () => k_765(tmp_352, ks_868);
                        }, ks_799, undefined);
                      case 70: 
                        return SHIFT(p_5, (k_766, ks_869, k_767) => {
                          const tmp_353 = $effekt.println("end of file");
                          return () => k_767(tmp_353, ks_869);
                        }, ks_799, undefined);
                      case 71: 
                        return SHIFT(p_5, (k_768, ks_870, k_769) => {
                          const tmp_354 = $effekt.println("no such device or address");
                          return () => k_769(tmp_354, ks_870);
                        }, ks_799, undefined);
                      case 72: 
                        return SHIFT(p_5, (k_770, ks_871, k_771) => {
                          const tmp_355 = $effekt.println("too many links");
                          return () => k_771(tmp_355, ks_871);
                        }, ks_799, undefined);
                      case 73: 
                        return SHIFT(p_5, (k_772, ks_872, k_773) => {
                          const tmp_356 = $effekt.println("inappropriate ioctl for device");
                          return () => k_773(tmp_356, ks_872);
                        }, ks_799, undefined);
                      case 74: 
                        return SHIFT(p_5, (k_774, ks_873, k_775) => {
                          const tmp_357 = $effekt.println("inappropriate file type or format");
                          return () => k_775(tmp_357, ks_873);
                        }, ks_799, undefined);
                      case 75: 
                        return SHIFT(p_5, (k_776, ks_874, k_777) => {
                          const tmp_358 = $effekt.println("illegal byte sequence");
                          return () => k_777(tmp_358, ks_874);
                        }, ks_799, undefined);
                      case 76: 
                        return SHIFT(p_5, (k_778, ks_875, k_779) => {
                          const tmp_359 = $effekt.println("socket type not supported");
                          return () => k_779(tmp_359, ks_875);
                        }, ks_799, undefined);
                      case 77: 
                        return SHIFT(p_5, (k_780, ks_876, k_781) => {
                          const tmp_360 = $effekt.println("protocol driver not attached");
                          return () => k_781(tmp_360, ks_876);
                        }, ks_799, undefined);
                    }
                  }
                  if (tmp_282 === (1)) {
                    return l_57(new EPERM_0(), ks_797, undefined);
                  } else if (tmp_282 === (2)) {
                    return l_57(new ENOENT_0(), ks_797, undefined);
                  } else if (tmp_282 === (3)) {
                    return l_57(new ESRCH_0(), ks_797, undefined);
                  } else if (tmp_282 === (4)) {
                    return l_57(new EINTR_0(), ks_797, undefined);
                  } else if (tmp_282 === (5)) {
                    return l_57(new EIO_0(), ks_797, undefined);
                  } else if (tmp_282 === (6)) {
                    return l_57(new ENXIO_0(), ks_797, undefined);
                  } else if (tmp_282 === (7)) {
                    return l_57(new E_0(), ks_797, undefined);
                  } else if (tmp_282 === (9)) {
                    return l_57(new EBADF_0(), ks_797, undefined);
                  } else if (tmp_282 === (11)) {
                    return l_57(new EAGAIN_0(), ks_797, undefined);
                  } else if (tmp_282 === (12)) {
                    return l_57(new ENOMEM_0(), ks_797, undefined);
                  } else if (tmp_282 === (13)) {
                    return l_57(new EACCES_0(), ks_797, undefined);
                  } else if (tmp_282 === (14)) {
                    return l_57(new EFAULT_0(), ks_797, undefined);
                  } else if (tmp_282 === (16)) {
                    return l_57(new EBUSY_0(), ks_797, undefined);
                  } else if (tmp_282 === (17)) {
                    return l_57(new EEXIST_0(), ks_797, undefined);
                  } else if (tmp_282 === (18)) {
                    return l_57(new EXDEV_0(), ks_797, undefined);
                  } else if (tmp_282 === (19)) {
                    return l_57(new ENODEV_0(), ks_797, undefined);
                  } else if (tmp_282 === (20)) {
                    return l_57(new ENOTDIR_0(), ks_797, undefined);
                  } else if (tmp_282 === (21)) {
                    return l_57(new EISDIR_0(), ks_797, undefined);
                  } else if (tmp_282 === (22)) {
                    return l_57(new EINVAL_0(), ks_797, undefined);
                  } else if (tmp_282 === (23)) {
                    return l_57(new ENFILE_0(), ks_797, undefined);
                  } else if (tmp_282 === (24)) {
                    return l_57(new EMFILE_0(), ks_797, undefined);
                  } else if (tmp_282 === (25)) {
                    return l_57(new ENOTTY_0(), ks_797, undefined);
                  } else if (tmp_282 === (26)) {
                    return l_57(new ETXTBSY_0(), ks_797, undefined);
                  } else if (tmp_282 === (27)) {
                    return l_57(new EFBIG_0(), ks_797, undefined);
                  } else if (tmp_282 === (28)) {
                    return l_57(new ENOSPC_0(), ks_797, undefined);
                  } else if (tmp_282 === (29)) {
                    return l_57(new ESPIPE_0(), ks_797, undefined);
                  } else if (tmp_282 === (30)) {
                    return l_57(new EROFS_0(), ks_797, undefined);
                  } else if (tmp_282 === (31)) {
                    return l_57(new EMLINK_0(), ks_797, undefined);
                  } else if (tmp_282 === (32)) {
                    return l_57(new EPIPE_0(), ks_797, undefined);
                  } else if (tmp_282 === (34)) {
                    return l_57(new ERANGE_0(), ks_797, undefined);
                  } else if (tmp_282 === (36)) {
                    return l_57(new ENAMETOOLONG_0(), ks_797, undefined);
                  } else if (tmp_282 === (40)) {
                    return l_57(new ELOOP_0(), ks_797, undefined);
                  } else if (tmp_282 === (75)) {
                    return l_57(new EOVERFLOW_0(), ks_797, undefined);
                  } else if (tmp_282 === (79)) {
                    return l_57(new EFTYPE_0(), ks_797, undefined);
                  } else if (tmp_282 === (84)) {
                    return l_57(new EILSEQ_0(), ks_797, undefined);
                  } else if (tmp_282 === (88)) {
                    return l_57(new ENOTSOCK_0(), ks_797, undefined);
                  } else if (tmp_282 === (89)) {
                    return l_57(new EDESTADDRREQ_0(), ks_797, undefined);
                  } else if (tmp_282 === (90)) {
                    return l_57(new EMSGSIZE_0(), ks_797, undefined);
                  } else if (tmp_282 === (91)) {
                    return l_57(new EPROTOTYPE_0(), ks_797, undefined);
                  } else if (tmp_282 === (92)) {
                    return l_57(new ENOPROTOOPT_0(), ks_797, undefined);
                  } else if (tmp_282 === (93)) {
                    return l_57(new EPROTONOSUPPORT_0(), ks_797, undefined);
                  } else if (tmp_282 === (94)) {
                    return l_57(new ESOCKTNOSUPPORT_0(), ks_797, undefined);
                  } else if (tmp_282 === (95)) {
                    return l_57(new ENOTSUP_0(), ks_797, undefined);
                  } else if (tmp_282 === (97)) {
                    return l_57(new EAFNOSUPPORT_0(), ks_797, undefined);
                  } else if (tmp_282 === (98)) {
                    return l_57(new EADDRINUSE_0(), ks_797, undefined);
                  } else if (tmp_282 === (99)) {
                    return l_57(new EADDRNOTAVAIL_0(), ks_797, undefined);
                  } else if (tmp_282 === (100)) {
                    return l_57(new ENETDOWN_0(), ks_797, undefined);
                  } else if (tmp_282 === (101)) {
                    return l_57(new ENETUNREACH_0(), ks_797, undefined);
                  } else if (tmp_282 === (103)) {
                    return l_57(new ECONNABORTED_0(), ks_797, undefined);
                  } else if (tmp_282 === (104)) {
                    return l_57(new ECONNRESET_0(), ks_797, undefined);
                  } else if (tmp_282 === (105)) {
                    return l_57(new ENOBUFS_0(), ks_797, undefined);
                  } else if (tmp_282 === (106)) {
                    return l_57(new EISCONN_0(), ks_797, undefined);
                  } else if (tmp_282 === (107)) {
                    return l_57(new ENOTCONN_0(), ks_797, undefined);
                  } else if (tmp_282 === (110)) {
                    return l_57(new ETIMEDOUT_0(), ks_797, undefined);
                  } else if (tmp_282 === (111)) {
                    return l_57(new ECONNREFUSED_0(), ks_797, undefined);
                  } else if (tmp_282 === (113)) {
                    return l_57(new EHOSTUNREACH_0(), ks_797, undefined);
                  } else if (tmp_282 === (114)) {
                    return l_57(new EALREADY_0(), ks_797, undefined);
                  } else if (tmp_282 === (125)) {
                    return l_57(new ECANCELED_0(), ks_797, undefined);
                  } else if (tmp_282 === (200)) {
                    return l_57(new EAI_ADDRFAMILY_0(), ks_797, undefined);
                  } else if (tmp_282 === (201)) {
                    return l_57(new EAI_AGAIN_0(), ks_797, undefined);
                  } else if (tmp_282 === (202)) {
                    return l_57(new EAI_BADFLAGS_0(), ks_797, undefined);
                  } else if (tmp_282 === (203)) {
                    return l_57(new EAI_BADHINTS_0(), ks_797, undefined);
                  } else if (tmp_282 === (204)) {
                    return l_57(new EAI_CANCELED_0(), ks_797, undefined);
                  } else if (tmp_282 === (205)) {
                    return l_57(new EAI_FAIL_0(), ks_797, undefined);
                  } else if (tmp_282 === (206)) {
                    return l_57(new EAI_FAMILY_0(), ks_797, undefined);
                  } else if (tmp_282 === (207)) {
                    return l_57(new EAI_MEMORY_0(), ks_797, undefined);
                  } else if (tmp_282 === (208)) {
                    return l_57(new EAI_NODATA_0(), ks_797, undefined);
                  } else if (tmp_282 === (209)) {
                    return l_57(new EAI_NONAME_0(), ks_797, undefined);
                  } else if (tmp_282 === (210)) {
                    return l_57(new EAI_OVERFLOW_0(), ks_797, undefined);
                  } else if (tmp_282 === (211)) {
                    return l_57(new EAI_PROTOCOL_0(), ks_797, undefined);
                  } else if (tmp_282 === (212)) {
                    return l_57(new EAI_SERVICE_0(), ks_797, undefined);
                  } else if (tmp_282 === (213)) {
                    return l_57(new EAI_SOCKTYPE_0(), ks_797, undefined);
                  } else if (tmp_282 === (215)) {
                    return l_57(new ECHARSET_0(), ks_797, undefined);
                  } else if (tmp_282 === (216)) {
                    return l_57(new ENONET_0(), ks_797, undefined);
                  } else if (tmp_282 === (217)) {
                    return l_57(new UNKNOWN_0(), ks_797, undefined);
                  } else if (tmp_282 === (218)) {
                    return l_57(new EOF_0(), ks_797, undefined);
                  } else if (tmp_282 === (219)) {
                    return l_57(new EUNATCH_0(), ks_797, undefined);
                  } else if (tmp_282 === (220)) {
                    return l_57(new ESHUTDOWN_0(), ks_797, undefined);
                  } else {
                    const tmp_361 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_282)))) })();
                    file_4 = tmp_361;
                  }
                } else {
                  file_4 = v_r_148;
                }
                function b_blockBinding_1(ks_877, k_940) {
                  return close_0(file_4, ks_877, (v_r_149, ks_878) => {
                    if ((v_r_149 < (0))) {
                      const tmp_362 = errorNumber(v_r_149);
                      function l_58(ioError_4, ks_880, k_939) {
                        switch (ioError_4.__tag) {
                          case 0: 
                            return SHIFT(p_5, (k_783, ks_879, k_784) => {
                              const tmp_363 = $effekt.println("argument list too long");
                              return () => k_784(tmp_363, ks_879);
                            }, ks_880, undefined);
                          case 1: 
                            return SHIFT(p_5, (k_785, ks_881, k_786) => {
                              const tmp_364 = $effekt.println("permission denied");
                              return () => k_786(tmp_364, ks_881);
                            }, ks_880, undefined);
                          case 2: 
                            return SHIFT(p_5, (k_787, ks_882, k_788) => {
                              const tmp_365 = $effekt.println("address already in use");
                              return () => k_788(tmp_365, ks_882);
                            }, ks_880, undefined);
                          case 3: 
                            return SHIFT(p_5, (k_789, ks_883, k_790) => {
                              const tmp_366 = $effekt.println("address not available");
                              return () => k_790(tmp_366, ks_883);
                            }, ks_880, undefined);
                          case 4: 
                            return SHIFT(p_5, (k_791, ks_884, k_792) => {
                              const tmp_367 = $effekt.println("address family not supported");
                              return () => k_792(tmp_367, ks_884);
                            }, ks_880, undefined);
                          case 5: 
                            return SHIFT(p_5, (k_793, ks_885, k_794) => {
                              const tmp_368 = $effekt.println("resource temporarily unavailable");
                              return () => k_794(tmp_368, ks_885);
                            }, ks_880, undefined);
                          case 6: 
                            return SHIFT(p_5, (k_795, ks_886, k_796) => {
                              const tmp_369 = $effekt.println("address family not supported");
                              return () => k_796(tmp_369, ks_886);
                            }, ks_880, undefined);
                          case 7: 
                            return SHIFT(p_5, (k_797, ks_887, k_798) => {
                              const tmp_370 = $effekt.println("temporary failure");
                              return () => k_798(tmp_370, ks_887);
                            }, ks_880, undefined);
                          case 8: 
                            return SHIFT(p_5, (k_799, ks_888, k_800) => {
                              const tmp_371 = $effekt.println("bad ai_flags value");
                              return () => k_800(tmp_371, ks_888);
                            }, ks_880, undefined);
                          case 9: 
                            return SHIFT(p_5, (k_801, ks_889, k_802) => {
                              const tmp_372 = $effekt.println("invalid value for hints");
                              return () => k_802(tmp_372, ks_889);
                            }, ks_880, undefined);
                          case 10: 
                            return SHIFT(p_5, (k_803, ks_890, k_804) => {
                              const tmp_373 = $effekt.println("request canceled");
                              return () => k_804(tmp_373, ks_890);
                            }, ks_880, undefined);
                          case 11: 
                            return SHIFT(p_5, (k_805, ks_891, k_806) => {
                              const tmp_374 = $effekt.println("permanent failure");
                              return () => k_806(tmp_374, ks_891);
                            }, ks_880, undefined);
                          case 12: 
                            return SHIFT(p_5, (k_807, ks_892, k_808) => {
                              const tmp_375 = $effekt.println("ai_family not supported");
                              return () => k_808(tmp_375, ks_892);
                            }, ks_880, undefined);
                          case 13: 
                            return SHIFT(p_5, (k_809, ks_893, k_810) => {
                              const tmp_376 = $effekt.println("out of memory");
                              return () => k_810(tmp_376, ks_893);
                            }, ks_880, undefined);
                          case 14: 
                            return SHIFT(p_5, (k_811, ks_894, k_812) => {
                              const tmp_377 = $effekt.println("no address");
                              return () => k_812(tmp_377, ks_894);
                            }, ks_880, undefined);
                          case 15: 
                            return SHIFT(p_5, (k_813, ks_895, k_814) => {
                              const tmp_378 = $effekt.println("unknown node or service");
                              return () => k_814(tmp_378, ks_895);
                            }, ks_880, undefined);
                          case 16: 
                            return SHIFT(p_5, (k_815, ks_896, k_816) => {
                              const tmp_379 = $effekt.println("argument buffer overflow");
                              return () => k_816(tmp_379, ks_896);
                            }, ks_880, undefined);
                          case 17: 
                            return SHIFT(p_5, (k_817, ks_897, k_818) => {
                              const tmp_380 = $effekt.println("resolved protocol is unknown");
                              return () => k_818(tmp_380, ks_897);
                            }, ks_880, undefined);
                          case 18: 
                            return SHIFT(p_5, (k_819, ks_898, k_820) => {
                              const tmp_381 = $effekt.println("service not available for socket type");
                              return () => k_820(tmp_381, ks_898);
                            }, ks_880, undefined);
                          case 19: 
                            return SHIFT(p_5, (k_821, ks_899, k_822) => {
                              const tmp_382 = $effekt.println("socket type not supported");
                              return () => k_822(tmp_382, ks_899);
                            }, ks_880, undefined);
                          case 20: 
                            return SHIFT(p_5, (k_823, ks_900, k_824) => {
                              const tmp_383 = $effekt.println("connection already in progress");
                              return () => k_824(tmp_383, ks_900);
                            }, ks_880, undefined);
                          case 21: 
                            return SHIFT(p_5, (k_825, ks_901, k_826) => {
                              const tmp_384 = $effekt.println("bad file descriptor");
                              return () => k_826(tmp_384, ks_901);
                            }, ks_880, undefined);
                          case 22: 
                            return SHIFT(p_5, (k_827, ks_902, k_828) => {
                              const tmp_385 = $effekt.println("resource busy or locked");
                              return () => k_828(tmp_385, ks_902);
                            }, ks_880, undefined);
                          case 23: 
                            return SHIFT(p_5, (k_829, ks_903, k_830) => {
                              const tmp_386 = $effekt.println("operation canceled");
                              return () => k_830(tmp_386, ks_903);
                            }, ks_880, undefined);
                          case 24: 
                            return SHIFT(p_5, (k_831, ks_904, k_832) => {
                              const tmp_387 = $effekt.println("invalid Unicode character");
                              return () => k_832(tmp_387, ks_904);
                            }, ks_880, undefined);
                          case 25: 
                            return SHIFT(p_5, (k_833, ks_905, k_834) => {
                              const tmp_388 = $effekt.println("software caused connection abort");
                              return () => k_834(tmp_388, ks_905);
                            }, ks_880, undefined);
                          case 26: 
                            return SHIFT(p_5, (k_835, ks_906, k_836) => {
                              const tmp_389 = $effekt.println("connection refused");
                              return () => k_836(tmp_389, ks_906);
                            }, ks_880, undefined);
                          case 27: 
                            return SHIFT(p_5, (k_837, ks_907, k_838) => {
                              const tmp_390 = $effekt.println("connection reset by peer");
                              return () => k_838(tmp_390, ks_907);
                            }, ks_880, undefined);
                          case 28: 
                            return SHIFT(p_5, (k_839, ks_908, k_840) => {
                              const tmp_391 = $effekt.println("destination address required");
                              return () => k_840(tmp_391, ks_908);
                            }, ks_880, undefined);
                          case 29: 
                            return SHIFT(p_5, (k_841, ks_909, k_842) => {
                              const tmp_392 = $effekt.println("file already exists");
                              return () => k_842(tmp_392, ks_909);
                            }, ks_880, undefined);
                          case 30: 
                            return SHIFT(p_5, (k_843, ks_910, k_844) => {
                              const tmp_393 = $effekt.println("bad address in system call argument");
                              return () => k_844(tmp_393, ks_910);
                            }, ks_880, undefined);
                          case 31: 
                            return SHIFT(p_5, (k_845, ks_911, k_846) => {
                              const tmp_394 = $effekt.println("file too large");
                              return () => k_846(tmp_394, ks_911);
                            }, ks_880, undefined);
                          case 32: 
                            return SHIFT(p_5, (k_847, ks_912, k_848) => {
                              const tmp_395 = $effekt.println("host is unreachable");
                              return () => k_848(tmp_395, ks_912);
                            }, ks_880, undefined);
                          case 33: 
                            return SHIFT(p_5, (k_849, ks_913, k_850) => {
                              const tmp_396 = $effekt.println("interrupted system call");
                              return () => k_850(tmp_396, ks_913);
                            }, ks_880, undefined);
                          case 34: 
                            return SHIFT(p_5, (k_851, ks_914, k_852) => {
                              const tmp_397 = $effekt.println("invalid argument");
                              return () => k_852(tmp_397, ks_914);
                            }, ks_880, undefined);
                          case 35: 
                            return SHIFT(p_5, (k_853, ks_915, k_854) => {
                              const tmp_398 = $effekt.println("i/o error");
                              return () => k_854(tmp_398, ks_915);
                            }, ks_880, undefined);
                          case 36: 
                            return SHIFT(p_5, (k_855, ks_916, k_856) => {
                              const tmp_399 = $effekt.println("socket is already connected");
                              return () => k_856(tmp_399, ks_916);
                            }, ks_880, undefined);
                          case 37: 
                            return SHIFT(p_5, (k_857, ks_917, k_858) => {
                              const tmp_400 = $effekt.println("illegal operation on a directory");
                              return () => k_858(tmp_400, ks_917);
                            }, ks_880, undefined);
                          case 38: 
                            return SHIFT(p_5, (k_859, ks_918, k_860) => {
                              const tmp_401 = $effekt.println("too many symbolic links encountered");
                              return () => k_860(tmp_401, ks_918);
                            }, ks_880, undefined);
                          case 39: 
                            return SHIFT(p_5, (k_861, ks_919, k_862) => {
                              const tmp_402 = $effekt.println("too many open files");
                              return () => k_862(tmp_402, ks_919);
                            }, ks_880, undefined);
                          case 40: 
                            return SHIFT(p_5, (k_863, ks_920, k_864) => {
                              const tmp_403 = $effekt.println("message too long");
                              return () => k_864(tmp_403, ks_920);
                            }, ks_880, undefined);
                          case 41: 
                            return SHIFT(p_5, (k_865, ks_921, k_866) => {
                              const tmp_404 = $effekt.println("name too long");
                              return () => k_866(tmp_404, ks_921);
                            }, ks_880, undefined);
                          case 42: 
                            return SHIFT(p_5, (k_867, ks_922, k_868) => {
                              const tmp_405 = $effekt.println("network is down");
                              return () => k_868(tmp_405, ks_922);
                            }, ks_880, undefined);
                          case 43: 
                            return SHIFT(p_5, (k_869, ks_923, k_870) => {
                              const tmp_406 = $effekt.println("network is unreachable");
                              return () => k_870(tmp_406, ks_923);
                            }, ks_880, undefined);
                          case 44: 
                            return SHIFT(p_5, (k_871, ks_924, k_872) => {
                              const tmp_407 = $effekt.println("file table overflow");
                              return () => k_872(tmp_407, ks_924);
                            }, ks_880, undefined);
                          case 45: 
                            return SHIFT(p_5, (k_873, ks_925, k_874) => {
                              const tmp_408 = $effekt.println("no buffer space available");
                              return () => k_874(tmp_408, ks_925);
                            }, ks_880, undefined);
                          case 46: 
                            return SHIFT(p_5, (k_875, ks_926, k_876) => {
                              const tmp_409 = $effekt.println("no such device");
                              return () => k_876(tmp_409, ks_926);
                            }, ks_880, undefined);
                          case 47: 
                            return SHIFT(p_5, (k_877, ks_927, k_878) => {
                              const tmp_410 = $effekt.println("no such file or directory");
                              return () => k_878(tmp_410, ks_927);
                            }, ks_880, undefined);
                          case 48: 
                            return SHIFT(p_5, (k_879, ks_928, k_880) => {
                              const tmp_411 = $effekt.println("not enough memory");
                              return () => k_880(tmp_411, ks_928);
                            }, ks_880, undefined);
                          case 49: 
                            return SHIFT(p_5, (k_881, ks_929, k_882) => {
                              const tmp_412 = $effekt.println("machine is not on the network");
                              return () => k_882(tmp_412, ks_929);
                            }, ks_880, undefined);
                          case 50: 
                            return SHIFT(p_5, (k_883, ks_930, k_884) => {
                              const tmp_413 = $effekt.println("protocol not available");
                              return () => k_884(tmp_413, ks_930);
                            }, ks_880, undefined);
                          case 51: 
                            return SHIFT(p_5, (k_885, ks_931, k_886) => {
                              const tmp_414 = $effekt.println("no space left on device");
                              return () => k_886(tmp_414, ks_931);
                            }, ks_880, undefined);
                          case 52: 
                            return SHIFT(p_5, (k_887, ks_932, k_888) => {
                              const tmp_415 = $effekt.println("socket is not connected");
                              return () => k_888(tmp_415, ks_932);
                            }, ks_880, undefined);
                          case 53: 
                            return SHIFT(p_5, (k_889, ks_933, k_890) => {
                              const tmp_416 = $effekt.println("not a directory");
                              return () => k_890(tmp_416, ks_933);
                            }, ks_880, undefined);
                          case 54: 
                            return SHIFT(p_5, (k_891, ks_934, k_892) => {
                              const tmp_417 = $effekt.println("socket operation on non-socket");
                              return () => k_892(tmp_417, ks_934);
                            }, ks_880, undefined);
                          case 55: 
                            return SHIFT(p_5, (k_893, ks_935, k_894) => {
                              const tmp_418 = $effekt.println("operation not supported on socket");
                              return () => k_894(tmp_418, ks_935);
                            }, ks_880, undefined);
                          case 56: 
                            return SHIFT(p_5, (k_895, ks_936, k_896) => {
                              const tmp_419 = $effekt.println("value too large for defined data type");
                              return () => k_896(tmp_419, ks_936);
                            }, ks_880, undefined);
                          case 57: 
                            return SHIFT(p_5, (k_897, ks_937, k_898) => {
                              const tmp_420 = $effekt.println("operation not permitted");
                              return () => k_898(tmp_420, ks_937);
                            }, ks_880, undefined);
                          case 58: 
                            return SHIFT(p_5, (k_899, ks_938, k_900) => {
                              const tmp_421 = $effekt.println("broken pipe");
                              return () => k_900(tmp_421, ks_938);
                            }, ks_880, undefined);
                          case 59: 
                            return SHIFT(p_5, (k_901, ks_939, k_902) => {
                              const tmp_422 = $effekt.println("protocol not supported");
                              return () => k_902(tmp_422, ks_939);
                            }, ks_880, undefined);
                          case 60: 
                            return SHIFT(p_5, (k_903, ks_940, k_904) => {
                              const tmp_423 = $effekt.println("protocol wrong type for socket");
                              return () => k_904(tmp_423, ks_940);
                            }, ks_880, undefined);
                          case 61: 
                            return SHIFT(p_5, (k_905, ks_941, k_906) => {
                              const tmp_424 = $effekt.println("result too large");
                              return () => k_906(tmp_424, ks_941);
                            }, ks_880, undefined);
                          case 62: 
                            return SHIFT(p_5, (k_907, ks_942, k_908) => {
                              const tmp_425 = $effekt.println("read-only file system");
                              return () => k_908(tmp_425, ks_942);
                            }, ks_880, undefined);
                          case 63: 
                            return SHIFT(p_5, (k_909, ks_943, k_910) => {
                              const tmp_426 = $effekt.println("cannot send after transport endpoint shutdown");
                              return () => k_910(tmp_426, ks_943);
                            }, ks_880, undefined);
                          case 64: 
                            return SHIFT(p_5, (k_911, ks_944, k_912) => {
                              const tmp_427 = $effekt.println("invalid seek");
                              return () => k_912(tmp_427, ks_944);
                            }, ks_880, undefined);
                          case 65: 
                            return SHIFT(p_5, (k_913, ks_945, k_914) => {
                              const tmp_428 = $effekt.println("no such process");
                              return () => k_914(tmp_428, ks_945);
                            }, ks_880, undefined);
                          case 66: 
                            return SHIFT(p_5, (k_915, ks_946, k_916) => {
                              const tmp_429 = $effekt.println("connection timed out");
                              return () => k_916(tmp_429, ks_946);
                            }, ks_880, undefined);
                          case 67: 
                            return SHIFT(p_5, (k_917, ks_947, k_918) => {
                              const tmp_430 = $effekt.println("text file is busy");
                              return () => k_918(tmp_430, ks_947);
                            }, ks_880, undefined);
                          case 68: 
                            return SHIFT(p_5, (k_919, ks_948, k_920) => {
                              const tmp_431 = $effekt.println("cross-device link not permitted");
                              return () => k_920(tmp_431, ks_948);
                            }, ks_880, undefined);
                          case 69: 
                            return SHIFT(p_5, (k_921, ks_949, k_922) => {
                              const tmp_432 = $effekt.println("unknown error");
                              return () => k_922(tmp_432, ks_949);
                            }, ks_880, undefined);
                          case 70: 
                            return SHIFT(p_5, (k_923, ks_950, k_924) => {
                              const tmp_433 = $effekt.println("end of file");
                              return () => k_924(tmp_433, ks_950);
                            }, ks_880, undefined);
                          case 71: 
                            return SHIFT(p_5, (k_925, ks_951, k_926) => {
                              const tmp_434 = $effekt.println("no such device or address");
                              return () => k_926(tmp_434, ks_951);
                            }, ks_880, undefined);
                          case 72: 
                            return SHIFT(p_5, (k_927, ks_952, k_928) => {
                              const tmp_435 = $effekt.println("too many links");
                              return () => k_928(tmp_435, ks_952);
                            }, ks_880, undefined);
                          case 73: 
                            return SHIFT(p_5, (k_929, ks_953, k_930) => {
                              const tmp_436 = $effekt.println("inappropriate ioctl for device");
                              return () => k_930(tmp_436, ks_953);
                            }, ks_880, undefined);
                          case 74: 
                            return SHIFT(p_5, (k_931, ks_954, k_932) => {
                              const tmp_437 = $effekt.println("inappropriate file type or format");
                              return () => k_932(tmp_437, ks_954);
                            }, ks_880, undefined);
                          case 75: 
                            return SHIFT(p_5, (k_933, ks_955, k_934) => {
                              const tmp_438 = $effekt.println("illegal byte sequence");
                              return () => k_934(tmp_438, ks_955);
                            }, ks_880, undefined);
                          case 76: 
                            return SHIFT(p_5, (k_935, ks_956, k_936) => {
                              const tmp_439 = $effekt.println("socket type not supported");
                              return () => k_936(tmp_439, ks_956);
                            }, ks_880, undefined);
                          case 77: 
                            return SHIFT(p_5, (k_937, ks_957, k_938) => {
                              const tmp_440 = $effekt.println("protocol driver not attached");
                              return () => k_938(tmp_440, ks_957);
                            }, ks_880, undefined);
                        }
                      }
                      if (tmp_362 === (1)) {
                        return l_58(new EPERM_0(), ks_878, undefined);
                      } else if (tmp_362 === (2)) {
                        return l_58(new ENOENT_0(), ks_878, undefined);
                      } else if (tmp_362 === (3)) {
                        return l_58(new ESRCH_0(), ks_878, undefined);
                      } else if (tmp_362 === (4)) {
                        return l_58(new EINTR_0(), ks_878, undefined);
                      } else if (tmp_362 === (5)) {
                        return l_58(new EIO_0(), ks_878, undefined);
                      } else if (tmp_362 === (6)) {
                        return l_58(new ENXIO_0(), ks_878, undefined);
                      } else if (tmp_362 === (7)) {
                        return l_58(new E_0(), ks_878, undefined);
                      } else if (tmp_362 === (9)) {
                        return l_58(new EBADF_0(), ks_878, undefined);
                      } else if (tmp_362 === (11)) {
                        return l_58(new EAGAIN_0(), ks_878, undefined);
                      } else if (tmp_362 === (12)) {
                        return l_58(new ENOMEM_0(), ks_878, undefined);
                      } else if (tmp_362 === (13)) {
                        return l_58(new EACCES_0(), ks_878, undefined);
                      } else if (tmp_362 === (14)) {
                        return l_58(new EFAULT_0(), ks_878, undefined);
                      } else if (tmp_362 === (16)) {
                        return l_58(new EBUSY_0(), ks_878, undefined);
                      } else if (tmp_362 === (17)) {
                        return l_58(new EEXIST_0(), ks_878, undefined);
                      } else if (tmp_362 === (18)) {
                        return l_58(new EXDEV_0(), ks_878, undefined);
                      } else if (tmp_362 === (19)) {
                        return l_58(new ENODEV_0(), ks_878, undefined);
                      } else if (tmp_362 === (20)) {
                        return l_58(new ENOTDIR_0(), ks_878, undefined);
                      } else if (tmp_362 === (21)) {
                        return l_58(new EISDIR_0(), ks_878, undefined);
                      } else if (tmp_362 === (22)) {
                        return l_58(new EINVAL_0(), ks_878, undefined);
                      } else if (tmp_362 === (23)) {
                        return l_58(new ENFILE_0(), ks_878, undefined);
                      } else if (tmp_362 === (24)) {
                        return l_58(new EMFILE_0(), ks_878, undefined);
                      } else if (tmp_362 === (25)) {
                        return l_58(new ENOTTY_0(), ks_878, undefined);
                      } else if (tmp_362 === (26)) {
                        return l_58(new ETXTBSY_0(), ks_878, undefined);
                      } else if (tmp_362 === (27)) {
                        return l_58(new EFBIG_0(), ks_878, undefined);
                      } else if (tmp_362 === (28)) {
                        return l_58(new ENOSPC_0(), ks_878, undefined);
                      } else if (tmp_362 === (29)) {
                        return l_58(new ESPIPE_0(), ks_878, undefined);
                      } else if (tmp_362 === (30)) {
                        return l_58(new EROFS_0(), ks_878, undefined);
                      } else if (tmp_362 === (31)) {
                        return l_58(new EMLINK_0(), ks_878, undefined);
                      } else if (tmp_362 === (32)) {
                        return l_58(new EPIPE_0(), ks_878, undefined);
                      } else if (tmp_362 === (34)) {
                        return l_58(new ERANGE_0(), ks_878, undefined);
                      } else if (tmp_362 === (36)) {
                        return l_58(new ENAMETOOLONG_0(), ks_878, undefined);
                      } else if (tmp_362 === (40)) {
                        return l_58(new ELOOP_0(), ks_878, undefined);
                      } else if (tmp_362 === (75)) {
                        return l_58(new EOVERFLOW_0(), ks_878, undefined);
                      } else if (tmp_362 === (79)) {
                        return l_58(new EFTYPE_0(), ks_878, undefined);
                      } else if (tmp_362 === (84)) {
                        return l_58(new EILSEQ_0(), ks_878, undefined);
                      } else if (tmp_362 === (88)) {
                        return l_58(new ENOTSOCK_0(), ks_878, undefined);
                      } else if (tmp_362 === (89)) {
                        return l_58(new EDESTADDRREQ_0(), ks_878, undefined);
                      } else if (tmp_362 === (90)) {
                        return l_58(new EMSGSIZE_0(), ks_878, undefined);
                      } else if (tmp_362 === (91)) {
                        return l_58(new EPROTOTYPE_0(), ks_878, undefined);
                      } else if (tmp_362 === (92)) {
                        return l_58(new ENOPROTOOPT_0(), ks_878, undefined);
                      } else if (tmp_362 === (93)) {
                        return l_58(new EPROTONOSUPPORT_0(), ks_878, undefined);
                      } else if (tmp_362 === (94)) {
                        return l_58(new ESOCKTNOSUPPORT_0(), ks_878, undefined);
                      } else if (tmp_362 === (95)) {
                        return l_58(new ENOTSUP_0(), ks_878, undefined);
                      } else if (tmp_362 === (97)) {
                        return l_58(new EAFNOSUPPORT_0(), ks_878, undefined);
                      } else if (tmp_362 === (98)) {
                        return l_58(new EADDRINUSE_0(), ks_878, undefined);
                      } else if (tmp_362 === (99)) {
                        return l_58(new EADDRNOTAVAIL_0(), ks_878, undefined);
                      } else if (tmp_362 === (100)) {
                        return l_58(new ENETDOWN_0(), ks_878, undefined);
                      } else if (tmp_362 === (101)) {
                        return l_58(new ENETUNREACH_0(), ks_878, undefined);
                      } else if (tmp_362 === (103)) {
                        return l_58(new ECONNABORTED_0(), ks_878, undefined);
                      } else if (tmp_362 === (104)) {
                        return l_58(new ECONNRESET_0(), ks_878, undefined);
                      } else if (tmp_362 === (105)) {
                        return l_58(new ENOBUFS_0(), ks_878, undefined);
                      } else if (tmp_362 === (106)) {
                        return l_58(new EISCONN_0(), ks_878, undefined);
                      } else if (tmp_362 === (107)) {
                        return l_58(new ENOTCONN_0(), ks_878, undefined);
                      } else if (tmp_362 === (110)) {
                        return l_58(new ETIMEDOUT_0(), ks_878, undefined);
                      } else if (tmp_362 === (111)) {
                        return l_58(new ECONNREFUSED_0(), ks_878, undefined);
                      } else if (tmp_362 === (113)) {
                        return l_58(new EHOSTUNREACH_0(), ks_878, undefined);
                      } else if (tmp_362 === (114)) {
                        return l_58(new EALREADY_0(), ks_878, undefined);
                      } else if (tmp_362 === (125)) {
                        return l_58(new ECANCELED_0(), ks_878, undefined);
                      } else if (tmp_362 === (200)) {
                        return l_58(new EAI_ADDRFAMILY_0(), ks_878, undefined);
                      } else if (tmp_362 === (201)) {
                        return l_58(new EAI_AGAIN_0(), ks_878, undefined);
                      } else if (tmp_362 === (202)) {
                        return l_58(new EAI_BADFLAGS_0(), ks_878, undefined);
                      } else if (tmp_362 === (203)) {
                        return l_58(new EAI_BADHINTS_0(), ks_878, undefined);
                      } else if (tmp_362 === (204)) {
                        return l_58(new EAI_CANCELED_0(), ks_878, undefined);
                      } else if (tmp_362 === (205)) {
                        return l_58(new EAI_FAIL_0(), ks_878, undefined);
                      } else if (tmp_362 === (206)) {
                        return l_58(new EAI_FAMILY_0(), ks_878, undefined);
                      } else if (tmp_362 === (207)) {
                        return l_58(new EAI_MEMORY_0(), ks_878, undefined);
                      } else if (tmp_362 === (208)) {
                        return l_58(new EAI_NODATA_0(), ks_878, undefined);
                      } else if (tmp_362 === (209)) {
                        return l_58(new EAI_NONAME_0(), ks_878, undefined);
                      } else if (tmp_362 === (210)) {
                        return l_58(new EAI_OVERFLOW_0(), ks_878, undefined);
                      } else if (tmp_362 === (211)) {
                        return l_58(new EAI_PROTOCOL_0(), ks_878, undefined);
                      } else if (tmp_362 === (212)) {
                        return l_58(new EAI_SERVICE_0(), ks_878, undefined);
                      } else if (tmp_362 === (213)) {
                        return l_58(new EAI_SOCKTYPE_0(), ks_878, undefined);
                      } else if (tmp_362 === (215)) {
                        return l_58(new ECHARSET_0(), ks_878, undefined);
                      } else if (tmp_362 === (216)) {
                        return l_58(new ENONET_0(), ks_878, undefined);
                      } else if (tmp_362 === (217)) {
                        return l_58(new UNKNOWN_0(), ks_878, undefined);
                      } else if (tmp_362 === (218)) {
                        return l_58(new EOF_0(), ks_878, undefined);
                      } else if (tmp_362 === (219)) {
                        return l_58(new EUNATCH_0(), ks_878, undefined);
                      } else if (tmp_362 === (220)) {
                        return l_58(new ESHUTDOWN_0(), ks_878, undefined);
                      } else {
                        const tmp_441 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_362)))) })();
                        return () => k_940($effekt.unit, ks_878);
                      }
                    } else {
                      return () => k_940($effekt.unit, ks_878);
                    }
                  });
                }
                const chunkSize_1 = 1048576;
                const tmp_442 = (new TextEncoder().encode(s_233));
                const offset_3 = ks_797.arena.fresh(0);
                function go_14(ks_958, k_1098) {
                  const s_234 = offset_3.value;
                  const s_235 = offset_3.value;
                  const tmp_443 = ((tmp_442.length) - s_235);
                  let v_r_150 = undefined;
                  if ((tmp_443 < chunkSize_1)) {
                    v_r_150 = tmp_443;
                  } else {
                    v_r_150 = chunkSize_1;
                  }
                  return write_0(file_4, tmp_442, s_234, v_r_150, -1, ks_958, (v_r_151, ks_959) => {
                    let n_17 = undefined;
                    if ((v_r_151 < (0))) {
                      const tmp_444 = errorNumber(v_r_151);
                      function l_59(ioError_5, ks_960, k_1097) {
                        switch (ioError_5.__tag) {
                          case 0: 
                            return b_blockBinding_1(ks_960, (_169, ks_961) =>
                              SHIFT(p_5, (k_941, ks_962, k_942) => {
                                const tmp_445 = $effekt.println("argument list too long");
                                return () => k_942(tmp_445, ks_962);
                              }, ks_961, undefined));
                          case 1: 
                            return b_blockBinding_1(ks_960, (_170, ks_963) =>
                              SHIFT(p_5, (k_943, ks_964, k_944) => {
                                const tmp_446 = $effekt.println("permission denied");
                                return () => k_944(tmp_446, ks_964);
                              }, ks_963, undefined));
                          case 2: 
                            return b_blockBinding_1(ks_960, (_171, ks_965) =>
                              SHIFT(p_5, (k_945, ks_966, k_946) => {
                                const tmp_447 = $effekt.println("address already in use");
                                return () => k_946(tmp_447, ks_966);
                              }, ks_965, undefined));
                          case 3: 
                            return b_blockBinding_1(ks_960, (_172, ks_967) =>
                              SHIFT(p_5, (k_947, ks_968, k_948) => {
                                const tmp_448 = $effekt.println("address not available");
                                return () => k_948(tmp_448, ks_968);
                              }, ks_967, undefined));
                          case 4: 
                            return b_blockBinding_1(ks_960, (_173, ks_969) =>
                              SHIFT(p_5, (k_949, ks_970, k_950) => {
                                const tmp_449 = $effekt.println("address family not supported");
                                return () => k_950(tmp_449, ks_970);
                              }, ks_969, undefined));
                          case 5: 
                            return b_blockBinding_1(ks_960, (_174, ks_971) =>
                              SHIFT(p_5, (k_951, ks_972, k_952) => {
                                const tmp_450 = $effekt.println("resource temporarily unavailable");
                                return () => k_952(tmp_450, ks_972);
                              }, ks_971, undefined));
                          case 6: 
                            return b_blockBinding_1(ks_960, (_175, ks_973) =>
                              SHIFT(p_5, (k_953, ks_974, k_954) => {
                                const tmp_451 = $effekt.println("address family not supported");
                                return () => k_954(tmp_451, ks_974);
                              }, ks_973, undefined));
                          case 7: 
                            return b_blockBinding_1(ks_960, (_176, ks_975) =>
                              SHIFT(p_5, (k_955, ks_976, k_956) => {
                                const tmp_452 = $effekt.println("temporary failure");
                                return () => k_956(tmp_452, ks_976);
                              }, ks_975, undefined));
                          case 8: 
                            return b_blockBinding_1(ks_960, (_177, ks_977) =>
                              SHIFT(p_5, (k_957, ks_978, k_958) => {
                                const tmp_453 = $effekt.println("bad ai_flags value");
                                return () => k_958(tmp_453, ks_978);
                              }, ks_977, undefined));
                          case 9: 
                            return b_blockBinding_1(ks_960, (_178, ks_979) =>
                              SHIFT(p_5, (k_959, ks_980, k_960) => {
                                const tmp_454 = $effekt.println("invalid value for hints");
                                return () => k_960(tmp_454, ks_980);
                              }, ks_979, undefined));
                          case 10: 
                            return b_blockBinding_1(ks_960, (_179, ks_981) =>
                              SHIFT(p_5, (k_961, ks_982, k_962) => {
                                const tmp_455 = $effekt.println("request canceled");
                                return () => k_962(tmp_455, ks_982);
                              }, ks_981, undefined));
                          case 11: 
                            return b_blockBinding_1(ks_960, (_180, ks_983) =>
                              SHIFT(p_5, (k_963, ks_984, k_964) => {
                                const tmp_456 = $effekt.println("permanent failure");
                                return () => k_964(tmp_456, ks_984);
                              }, ks_983, undefined));
                          case 12: 
                            return b_blockBinding_1(ks_960, (_181, ks_985) =>
                              SHIFT(p_5, (k_965, ks_986, k_966) => {
                                const tmp_457 = $effekt.println("ai_family not supported");
                                return () => k_966(tmp_457, ks_986);
                              }, ks_985, undefined));
                          case 13: 
                            return b_blockBinding_1(ks_960, (_182, ks_987) =>
                              SHIFT(p_5, (k_967, ks_988, k_968) => {
                                const tmp_458 = $effekt.println("out of memory");
                                return () => k_968(tmp_458, ks_988);
                              }, ks_987, undefined));
                          case 14: 
                            return b_blockBinding_1(ks_960, (_183, ks_989) =>
                              SHIFT(p_5, (k_969, ks_990, k_970) => {
                                const tmp_459 = $effekt.println("no address");
                                return () => k_970(tmp_459, ks_990);
                              }, ks_989, undefined));
                          case 15: 
                            return b_blockBinding_1(ks_960, (_184, ks_991) =>
                              SHIFT(p_5, (k_971, ks_992, k_972) => {
                                const tmp_460 = $effekt.println("unknown node or service");
                                return () => k_972(tmp_460, ks_992);
                              }, ks_991, undefined));
                          case 16: 
                            return b_blockBinding_1(ks_960, (_185, ks_993) =>
                              SHIFT(p_5, (k_973, ks_994, k_974) => {
                                const tmp_461 = $effekt.println("argument buffer overflow");
                                return () => k_974(tmp_461, ks_994);
                              }, ks_993, undefined));
                          case 17: 
                            return b_blockBinding_1(ks_960, (_186, ks_995) =>
                              SHIFT(p_5, (k_975, ks_996, k_976) => {
                                const tmp_462 = $effekt.println("resolved protocol is unknown");
                                return () => k_976(tmp_462, ks_996);
                              }, ks_995, undefined));
                          case 18: 
                            return b_blockBinding_1(ks_960, (_187, ks_997) =>
                              SHIFT(p_5, (k_977, ks_998, k_978) => {
                                const tmp_463 = $effekt.println("service not available for socket type");
                                return () => k_978(tmp_463, ks_998);
                              }, ks_997, undefined));
                          case 19: 
                            return b_blockBinding_1(ks_960, (_188, ks_999) =>
                              SHIFT(p_5, (k_979, ks_1000, k_980) => {
                                const tmp_464 = $effekt.println("socket type not supported");
                                return () => k_980(tmp_464, ks_1000);
                              }, ks_999, undefined));
                          case 20: 
                            return b_blockBinding_1(ks_960, (_189, ks_1001) =>
                              SHIFT(p_5, (k_981, ks_1002, k_982) => {
                                const tmp_465 = $effekt.println("connection already in progress");
                                return () => k_982(tmp_465, ks_1002);
                              }, ks_1001, undefined));
                          case 21: 
                            return b_blockBinding_1(ks_960, (_190, ks_1003) =>
                              SHIFT(p_5, (k_983, ks_1004, k_984) => {
                                const tmp_466 = $effekt.println("bad file descriptor");
                                return () => k_984(tmp_466, ks_1004);
                              }, ks_1003, undefined));
                          case 22: 
                            return b_blockBinding_1(ks_960, (_191, ks_1005) =>
                              SHIFT(p_5, (k_985, ks_1006, k_986) => {
                                const tmp_467 = $effekt.println("resource busy or locked");
                                return () => k_986(tmp_467, ks_1006);
                              }, ks_1005, undefined));
                          case 23: 
                            return b_blockBinding_1(ks_960, (_192, ks_1007) =>
                              SHIFT(p_5, (k_987, ks_1008, k_988) => {
                                const tmp_468 = $effekt.println("operation canceled");
                                return () => k_988(tmp_468, ks_1008);
                              }, ks_1007, undefined));
                          case 24: 
                            return b_blockBinding_1(ks_960, (_193, ks_1009) =>
                              SHIFT(p_5, (k_989, ks_1010, k_990) => {
                                const tmp_469 = $effekt.println("invalid Unicode character");
                                return () => k_990(tmp_469, ks_1010);
                              }, ks_1009, undefined));
                          case 25: 
                            return b_blockBinding_1(ks_960, (_194, ks_1011) =>
                              SHIFT(p_5, (k_991, ks_1012, k_992) => {
                                const tmp_470 = $effekt.println("software caused connection abort");
                                return () => k_992(tmp_470, ks_1012);
                              }, ks_1011, undefined));
                          case 26: 
                            return b_blockBinding_1(ks_960, (_195, ks_1013) =>
                              SHIFT(p_5, (k_993, ks_1014, k_994) => {
                                const tmp_471 = $effekt.println("connection refused");
                                return () => k_994(tmp_471, ks_1014);
                              }, ks_1013, undefined));
                          case 27: 
                            return b_blockBinding_1(ks_960, (_196, ks_1015) =>
                              SHIFT(p_5, (k_995, ks_1016, k_996) => {
                                const tmp_472 = $effekt.println("connection reset by peer");
                                return () => k_996(tmp_472, ks_1016);
                              }, ks_1015, undefined));
                          case 28: 
                            return b_blockBinding_1(ks_960, (_197, ks_1017) =>
                              SHIFT(p_5, (k_997, ks_1018, k_998) => {
                                const tmp_473 = $effekt.println("destination address required");
                                return () => k_998(tmp_473, ks_1018);
                              }, ks_1017, undefined));
                          case 29: 
                            return b_blockBinding_1(ks_960, (_198, ks_1019) =>
                              SHIFT(p_5, (k_999, ks_1020, k_1000) => {
                                const tmp_474 = $effekt.println("file already exists");
                                return () => k_1000(tmp_474, ks_1020);
                              }, ks_1019, undefined));
                          case 30: 
                            return b_blockBinding_1(ks_960, (_199, ks_1021) =>
                              SHIFT(p_5, (k_1001, ks_1022, k_1002) => {
                                const tmp_475 = $effekt.println("bad address in system call argument");
                                return () => k_1002(tmp_475, ks_1022);
                              }, ks_1021, undefined));
                          case 31: 
                            return b_blockBinding_1(ks_960, (_200, ks_1023) =>
                              SHIFT(p_5, (k_1003, ks_1024, k_1004) => {
                                const tmp_476 = $effekt.println("file too large");
                                return () => k_1004(tmp_476, ks_1024);
                              }, ks_1023, undefined));
                          case 32: 
                            return b_blockBinding_1(ks_960, (_201, ks_1025) =>
                              SHIFT(p_5, (k_1005, ks_1026, k_1006) => {
                                const tmp_477 = $effekt.println("host is unreachable");
                                return () => k_1006(tmp_477, ks_1026);
                              }, ks_1025, undefined));
                          case 33: 
                            return b_blockBinding_1(ks_960, (_202, ks_1027) =>
                              SHIFT(p_5, (k_1007, ks_1028, k_1008) => {
                                const tmp_478 = $effekt.println("interrupted system call");
                                return () => k_1008(tmp_478, ks_1028);
                              }, ks_1027, undefined));
                          case 34: 
                            return b_blockBinding_1(ks_960, (_203, ks_1029) =>
                              SHIFT(p_5, (k_1009, ks_1030, k_1010) => {
                                const tmp_479 = $effekt.println("invalid argument");
                                return () => k_1010(tmp_479, ks_1030);
                              }, ks_1029, undefined));
                          case 35: 
                            return b_blockBinding_1(ks_960, (_204, ks_1031) =>
                              SHIFT(p_5, (k_1011, ks_1032, k_1012) => {
                                const tmp_480 = $effekt.println("i/o error");
                                return () => k_1012(tmp_480, ks_1032);
                              }, ks_1031, undefined));
                          case 36: 
                            return b_blockBinding_1(ks_960, (_205, ks_1033) =>
                              SHIFT(p_5, (k_1013, ks_1034, k_1014) => {
                                const tmp_481 = $effekt.println("socket is already connected");
                                return () => k_1014(tmp_481, ks_1034);
                              }, ks_1033, undefined));
                          case 37: 
                            return b_blockBinding_1(ks_960, (_206, ks_1035) =>
                              SHIFT(p_5, (k_1015, ks_1036, k_1016) => {
                                const tmp_482 = $effekt.println("illegal operation on a directory");
                                return () => k_1016(tmp_482, ks_1036);
                              }, ks_1035, undefined));
                          case 38: 
                            return b_blockBinding_1(ks_960, (_207, ks_1037) =>
                              SHIFT(p_5, (k_1017, ks_1038, k_1018) => {
                                const tmp_483 = $effekt.println("too many symbolic links encountered");
                                return () => k_1018(tmp_483, ks_1038);
                              }, ks_1037, undefined));
                          case 39: 
                            return b_blockBinding_1(ks_960, (_208, ks_1039) =>
                              SHIFT(p_5, (k_1019, ks_1040, k_1020) => {
                                const tmp_484 = $effekt.println("too many open files");
                                return () => k_1020(tmp_484, ks_1040);
                              }, ks_1039, undefined));
                          case 40: 
                            return b_blockBinding_1(ks_960, (_209, ks_1041) =>
                              SHIFT(p_5, (k_1021, ks_1042, k_1022) => {
                                const tmp_485 = $effekt.println("message too long");
                                return () => k_1022(tmp_485, ks_1042);
                              }, ks_1041, undefined));
                          case 41: 
                            return b_blockBinding_1(ks_960, (_210, ks_1043) =>
                              SHIFT(p_5, (k_1023, ks_1044, k_1024) => {
                                const tmp_486 = $effekt.println("name too long");
                                return () => k_1024(tmp_486, ks_1044);
                              }, ks_1043, undefined));
                          case 42: 
                            return b_blockBinding_1(ks_960, (_211, ks_1045) =>
                              SHIFT(p_5, (k_1025, ks_1046, k_1026) => {
                                const tmp_487 = $effekt.println("network is down");
                                return () => k_1026(tmp_487, ks_1046);
                              }, ks_1045, undefined));
                          case 43: 
                            return b_blockBinding_1(ks_960, (_212, ks_1047) =>
                              SHIFT(p_5, (k_1027, ks_1048, k_1028) => {
                                const tmp_488 = $effekt.println("network is unreachable");
                                return () => k_1028(tmp_488, ks_1048);
                              }, ks_1047, undefined));
                          case 44: 
                            return b_blockBinding_1(ks_960, (_213, ks_1049) =>
                              SHIFT(p_5, (k_1029, ks_1050, k_1030) => {
                                const tmp_489 = $effekt.println("file table overflow");
                                return () => k_1030(tmp_489, ks_1050);
                              }, ks_1049, undefined));
                          case 45: 
                            return b_blockBinding_1(ks_960, (_214, ks_1051) =>
                              SHIFT(p_5, (k_1031, ks_1052, k_1032) => {
                                const tmp_490 = $effekt.println("no buffer space available");
                                return () => k_1032(tmp_490, ks_1052);
                              }, ks_1051, undefined));
                          case 46: 
                            return b_blockBinding_1(ks_960, (_215, ks_1053) =>
                              SHIFT(p_5, (k_1033, ks_1054, k_1034) => {
                                const tmp_491 = $effekt.println("no such device");
                                return () => k_1034(tmp_491, ks_1054);
                              }, ks_1053, undefined));
                          case 47: 
                            return b_blockBinding_1(ks_960, (_216, ks_1055) =>
                              SHIFT(p_5, (k_1035, ks_1056, k_1036) => {
                                const tmp_492 = $effekt.println("no such file or directory");
                                return () => k_1036(tmp_492, ks_1056);
                              }, ks_1055, undefined));
                          case 48: 
                            return b_blockBinding_1(ks_960, (_217, ks_1057) =>
                              SHIFT(p_5, (k_1037, ks_1058, k_1038) => {
                                const tmp_493 = $effekt.println("not enough memory");
                                return () => k_1038(tmp_493, ks_1058);
                              }, ks_1057, undefined));
                          case 49: 
                            return b_blockBinding_1(ks_960, (_218, ks_1059) =>
                              SHIFT(p_5, (k_1039, ks_1060, k_1040) => {
                                const tmp_494 = $effekt.println("machine is not on the network");
                                return () => k_1040(tmp_494, ks_1060);
                              }, ks_1059, undefined));
                          case 50: 
                            return b_blockBinding_1(ks_960, (_219, ks_1061) =>
                              SHIFT(p_5, (k_1041, ks_1062, k_1042) => {
                                const tmp_495 = $effekt.println("protocol not available");
                                return () => k_1042(tmp_495, ks_1062);
                              }, ks_1061, undefined));
                          case 51: 
                            return b_blockBinding_1(ks_960, (_220, ks_1063) =>
                              SHIFT(p_5, (k_1043, ks_1064, k_1044) => {
                                const tmp_496 = $effekt.println("no space left on device");
                                return () => k_1044(tmp_496, ks_1064);
                              }, ks_1063, undefined));
                          case 52: 
                            return b_blockBinding_1(ks_960, (_221, ks_1065) =>
                              SHIFT(p_5, (k_1045, ks_1066, k_1046) => {
                                const tmp_497 = $effekt.println("socket is not connected");
                                return () => k_1046(tmp_497, ks_1066);
                              }, ks_1065, undefined));
                          case 53: 
                            return b_blockBinding_1(ks_960, (_222, ks_1067) =>
                              SHIFT(p_5, (k_1047, ks_1068, k_1048) => {
                                const tmp_498 = $effekt.println("not a directory");
                                return () => k_1048(tmp_498, ks_1068);
                              }, ks_1067, undefined));
                          case 54: 
                            return b_blockBinding_1(ks_960, (_223, ks_1069) =>
                              SHIFT(p_5, (k_1049, ks_1070, k_1050) => {
                                const tmp_499 = $effekt.println("socket operation on non-socket");
                                return () => k_1050(tmp_499, ks_1070);
                              }, ks_1069, undefined));
                          case 55: 
                            return b_blockBinding_1(ks_960, (_224, ks_1071) =>
                              SHIFT(p_5, (k_1051, ks_1072, k_1052) => {
                                const tmp_500 = $effekt.println("operation not supported on socket");
                                return () => k_1052(tmp_500, ks_1072);
                              }, ks_1071, undefined));
                          case 56: 
                            return b_blockBinding_1(ks_960, (_225, ks_1073) =>
                              SHIFT(p_5, (k_1053, ks_1074, k_1054) => {
                                const tmp_501 = $effekt.println("value too large for defined data type");
                                return () => k_1054(tmp_501, ks_1074);
                              }, ks_1073, undefined));
                          case 57: 
                            return b_blockBinding_1(ks_960, (_226, ks_1075) =>
                              SHIFT(p_5, (k_1055, ks_1076, k_1056) => {
                                const tmp_502 = $effekt.println("operation not permitted");
                                return () => k_1056(tmp_502, ks_1076);
                              }, ks_1075, undefined));
                          case 58: 
                            return b_blockBinding_1(ks_960, (_227, ks_1077) =>
                              SHIFT(p_5, (k_1057, ks_1078, k_1058) => {
                                const tmp_503 = $effekt.println("broken pipe");
                                return () => k_1058(tmp_503, ks_1078);
                              }, ks_1077, undefined));
                          case 59: 
                            return b_blockBinding_1(ks_960, (_228, ks_1079) =>
                              SHIFT(p_5, (k_1059, ks_1080, k_1060) => {
                                const tmp_504 = $effekt.println("protocol not supported");
                                return () => k_1060(tmp_504, ks_1080);
                              }, ks_1079, undefined));
                          case 60: 
                            return b_blockBinding_1(ks_960, (_229, ks_1081) =>
                              SHIFT(p_5, (k_1061, ks_1082, k_1062) => {
                                const tmp_505 = $effekt.println("protocol wrong type for socket");
                                return () => k_1062(tmp_505, ks_1082);
                              }, ks_1081, undefined));
                          case 61: 
                            return b_blockBinding_1(ks_960, (_230, ks_1083) =>
                              SHIFT(p_5, (k_1063, ks_1084, k_1064) => {
                                const tmp_506 = $effekt.println("result too large");
                                return () => k_1064(tmp_506, ks_1084);
                              }, ks_1083, undefined));
                          case 62: 
                            return b_blockBinding_1(ks_960, (_231, ks_1085) =>
                              SHIFT(p_5, (k_1065, ks_1086, k_1066) => {
                                const tmp_507 = $effekt.println("read-only file system");
                                return () => k_1066(tmp_507, ks_1086);
                              }, ks_1085, undefined));
                          case 63: 
                            return b_blockBinding_1(ks_960, (_232, ks_1087) =>
                              SHIFT(p_5, (k_1067, ks_1088, k_1068) => {
                                const tmp_508 = $effekt.println("cannot send after transport endpoint shutdown");
                                return () => k_1068(tmp_508, ks_1088);
                              }, ks_1087, undefined));
                          case 64: 
                            return b_blockBinding_1(ks_960, (_233, ks_1089) =>
                              SHIFT(p_5, (k_1069, ks_1090, k_1070) => {
                                const tmp_509 = $effekt.println("invalid seek");
                                return () => k_1070(tmp_509, ks_1090);
                              }, ks_1089, undefined));
                          case 65: 
                            return b_blockBinding_1(ks_960, (_234, ks_1091) =>
                              SHIFT(p_5, (k_1071, ks_1092, k_1072) => {
                                const tmp_510 = $effekt.println("no such process");
                                return () => k_1072(tmp_510, ks_1092);
                              }, ks_1091, undefined));
                          case 66: 
                            return b_blockBinding_1(ks_960, (_235, ks_1093) =>
                              SHIFT(p_5, (k_1073, ks_1094, k_1074) => {
                                const tmp_511 = $effekt.println("connection timed out");
                                return () => k_1074(tmp_511, ks_1094);
                              }, ks_1093, undefined));
                          case 67: 
                            return b_blockBinding_1(ks_960, (_236, ks_1095) =>
                              SHIFT(p_5, (k_1075, ks_1096, k_1076) => {
                                const tmp_512 = $effekt.println("text file is busy");
                                return () => k_1076(tmp_512, ks_1096);
                              }, ks_1095, undefined));
                          case 68: 
                            return b_blockBinding_1(ks_960, (_237, ks_1097) =>
                              SHIFT(p_5, (k_1077, ks_1098, k_1078) => {
                                const tmp_513 = $effekt.println("cross-device link not permitted");
                                return () => k_1078(tmp_513, ks_1098);
                              }, ks_1097, undefined));
                          case 69: 
                            return b_blockBinding_1(ks_960, (_238, ks_1099) =>
                              SHIFT(p_5, (k_1079, ks_1100, k_1080) => {
                                const tmp_514 = $effekt.println("unknown error");
                                return () => k_1080(tmp_514, ks_1100);
                              }, ks_1099, undefined));
                          case 70: 
                            return b_blockBinding_1(ks_960, (_239, ks_1101) =>
                              SHIFT(p_5, (k_1081, ks_1102, k_1082) => {
                                const tmp_515 = $effekt.println("end of file");
                                return () => k_1082(tmp_515, ks_1102);
                              }, ks_1101, undefined));
                          case 71: 
                            return b_blockBinding_1(ks_960, (_240, ks_1103) =>
                              SHIFT(p_5, (k_1083, ks_1104, k_1084) => {
                                const tmp_516 = $effekt.println("no such device or address");
                                return () => k_1084(tmp_516, ks_1104);
                              }, ks_1103, undefined));
                          case 72: 
                            return b_blockBinding_1(ks_960, (_241, ks_1105) =>
                              SHIFT(p_5, (k_1085, ks_1106, k_1086) => {
                                const tmp_517 = $effekt.println("too many links");
                                return () => k_1086(tmp_517, ks_1106);
                              }, ks_1105, undefined));
                          case 73: 
                            return b_blockBinding_1(ks_960, (_242, ks_1107) =>
                              SHIFT(p_5, (k_1087, ks_1108, k_1088) => {
                                const tmp_518 = $effekt.println("inappropriate ioctl for device");
                                return () => k_1088(tmp_518, ks_1108);
                              }, ks_1107, undefined));
                          case 74: 
                            return b_blockBinding_1(ks_960, (_243, ks_1109) =>
                              SHIFT(p_5, (k_1089, ks_1110, k_1090) => {
                                const tmp_519 = $effekt.println("inappropriate file type or format");
                                return () => k_1090(tmp_519, ks_1110);
                              }, ks_1109, undefined));
                          case 75: 
                            return b_blockBinding_1(ks_960, (_244, ks_1111) =>
                              SHIFT(p_5, (k_1091, ks_1112, k_1092) => {
                                const tmp_520 = $effekt.println("illegal byte sequence");
                                return () => k_1092(tmp_520, ks_1112);
                              }, ks_1111, undefined));
                          case 76: 
                            return b_blockBinding_1(ks_960, (_245, ks_1113) =>
                              SHIFT(p_5, (k_1093, ks_1114, k_1094) => {
                                const tmp_521 = $effekt.println("socket type not supported");
                                return () => k_1094(tmp_521, ks_1114);
                              }, ks_1113, undefined));
                          case 77: 
                            return b_blockBinding_1(ks_960, (_246, ks_1115) =>
                              SHIFT(p_5, (k_1095, ks_1116, k_1096) => {
                                const tmp_522 = $effekt.println("protocol driver not attached");
                                return () => k_1096(tmp_522, ks_1116);
                              }, ks_1115, undefined));
                        }
                      }
                      if (tmp_444 === (1)) {
                        return l_59(new EPERM_0(), ks_959, undefined);
                      } else if (tmp_444 === (2)) {
                        return l_59(new ENOENT_0(), ks_959, undefined);
                      } else if (tmp_444 === (3)) {
                        return l_59(new ESRCH_0(), ks_959, undefined);
                      } else if (tmp_444 === (4)) {
                        return l_59(new EINTR_0(), ks_959, undefined);
                      } else if (tmp_444 === (5)) {
                        return l_59(new EIO_0(), ks_959, undefined);
                      } else if (tmp_444 === (6)) {
                        return l_59(new ENXIO_0(), ks_959, undefined);
                      } else if (tmp_444 === (7)) {
                        return l_59(new E_0(), ks_959, undefined);
                      } else if (tmp_444 === (9)) {
                        return l_59(new EBADF_0(), ks_959, undefined);
                      } else if (tmp_444 === (11)) {
                        return l_59(new EAGAIN_0(), ks_959, undefined);
                      } else if (tmp_444 === (12)) {
                        return l_59(new ENOMEM_0(), ks_959, undefined);
                      } else if (tmp_444 === (13)) {
                        return l_59(new EACCES_0(), ks_959, undefined);
                      } else if (tmp_444 === (14)) {
                        return l_59(new EFAULT_0(), ks_959, undefined);
                      } else if (tmp_444 === (16)) {
                        return l_59(new EBUSY_0(), ks_959, undefined);
                      } else if (tmp_444 === (17)) {
                        return l_59(new EEXIST_0(), ks_959, undefined);
                      } else if (tmp_444 === (18)) {
                        return l_59(new EXDEV_0(), ks_959, undefined);
                      } else if (tmp_444 === (19)) {
                        return l_59(new ENODEV_0(), ks_959, undefined);
                      } else if (tmp_444 === (20)) {
                        return l_59(new ENOTDIR_0(), ks_959, undefined);
                      } else if (tmp_444 === (21)) {
                        return l_59(new EISDIR_0(), ks_959, undefined);
                      } else if (tmp_444 === (22)) {
                        return l_59(new EINVAL_0(), ks_959, undefined);
                      } else if (tmp_444 === (23)) {
                        return l_59(new ENFILE_0(), ks_959, undefined);
                      } else if (tmp_444 === (24)) {
                        return l_59(new EMFILE_0(), ks_959, undefined);
                      } else if (tmp_444 === (25)) {
                        return l_59(new ENOTTY_0(), ks_959, undefined);
                      } else if (tmp_444 === (26)) {
                        return l_59(new ETXTBSY_0(), ks_959, undefined);
                      } else if (tmp_444 === (27)) {
                        return l_59(new EFBIG_0(), ks_959, undefined);
                      } else if (tmp_444 === (28)) {
                        return l_59(new ENOSPC_0(), ks_959, undefined);
                      } else if (tmp_444 === (29)) {
                        return l_59(new ESPIPE_0(), ks_959, undefined);
                      } else if (tmp_444 === (30)) {
                        return l_59(new EROFS_0(), ks_959, undefined);
                      } else if (tmp_444 === (31)) {
                        return l_59(new EMLINK_0(), ks_959, undefined);
                      } else if (tmp_444 === (32)) {
                        return l_59(new EPIPE_0(), ks_959, undefined);
                      } else if (tmp_444 === (34)) {
                        return l_59(new ERANGE_0(), ks_959, undefined);
                      } else if (tmp_444 === (36)) {
                        return l_59(new ENAMETOOLONG_0(), ks_959, undefined);
                      } else if (tmp_444 === (40)) {
                        return l_59(new ELOOP_0(), ks_959, undefined);
                      } else if (tmp_444 === (75)) {
                        return l_59(new EOVERFLOW_0(), ks_959, undefined);
                      } else if (tmp_444 === (79)) {
                        return l_59(new EFTYPE_0(), ks_959, undefined);
                      } else if (tmp_444 === (84)) {
                        return l_59(new EILSEQ_0(), ks_959, undefined);
                      } else if (tmp_444 === (88)) {
                        return l_59(new ENOTSOCK_0(), ks_959, undefined);
                      } else if (tmp_444 === (89)) {
                        return l_59(new EDESTADDRREQ_0(), ks_959, undefined);
                      } else if (tmp_444 === (90)) {
                        return l_59(new EMSGSIZE_0(), ks_959, undefined);
                      } else if (tmp_444 === (91)) {
                        return l_59(new EPROTOTYPE_0(), ks_959, undefined);
                      } else if (tmp_444 === (92)) {
                        return l_59(new ENOPROTOOPT_0(), ks_959, undefined);
                      } else if (tmp_444 === (93)) {
                        return l_59(new EPROTONOSUPPORT_0(), ks_959, undefined);
                      } else if (tmp_444 === (94)) {
                        return l_59(new ESOCKTNOSUPPORT_0(), ks_959, undefined);
                      } else if (tmp_444 === (95)) {
                        return l_59(new ENOTSUP_0(), ks_959, undefined);
                      } else if (tmp_444 === (97)) {
                        return l_59(new EAFNOSUPPORT_0(), ks_959, undefined);
                      } else if (tmp_444 === (98)) {
                        return l_59(new EADDRINUSE_0(), ks_959, undefined);
                      } else if (tmp_444 === (99)) {
                        return l_59(new EADDRNOTAVAIL_0(), ks_959, undefined);
                      } else if (tmp_444 === (100)) {
                        return l_59(new ENETDOWN_0(), ks_959, undefined);
                      } else if (tmp_444 === (101)) {
                        return l_59(new ENETUNREACH_0(), ks_959, undefined);
                      } else if (tmp_444 === (103)) {
                        return l_59(new ECONNABORTED_0(), ks_959, undefined);
                      } else if (tmp_444 === (104)) {
                        return l_59(new ECONNRESET_0(), ks_959, undefined);
                      } else if (tmp_444 === (105)) {
                        return l_59(new ENOBUFS_0(), ks_959, undefined);
                      } else if (tmp_444 === (106)) {
                        return l_59(new EISCONN_0(), ks_959, undefined);
                      } else if (tmp_444 === (107)) {
                        return l_59(new ENOTCONN_0(), ks_959, undefined);
                      } else if (tmp_444 === (110)) {
                        return l_59(new ETIMEDOUT_0(), ks_959, undefined);
                      } else if (tmp_444 === (111)) {
                        return l_59(new ECONNREFUSED_0(), ks_959, undefined);
                      } else if (tmp_444 === (113)) {
                        return l_59(new EHOSTUNREACH_0(), ks_959, undefined);
                      } else if (tmp_444 === (114)) {
                        return l_59(new EALREADY_0(), ks_959, undefined);
                      } else if (tmp_444 === (125)) {
                        return l_59(new ECANCELED_0(), ks_959, undefined);
                      } else if (tmp_444 === (200)) {
                        return l_59(new EAI_ADDRFAMILY_0(), ks_959, undefined);
                      } else if (tmp_444 === (201)) {
                        return l_59(new EAI_AGAIN_0(), ks_959, undefined);
                      } else if (tmp_444 === (202)) {
                        return l_59(new EAI_BADFLAGS_0(), ks_959, undefined);
                      } else if (tmp_444 === (203)) {
                        return l_59(new EAI_BADHINTS_0(), ks_959, undefined);
                      } else if (tmp_444 === (204)) {
                        return l_59(new EAI_CANCELED_0(), ks_959, undefined);
                      } else if (tmp_444 === (205)) {
                        return l_59(new EAI_FAIL_0(), ks_959, undefined);
                      } else if (tmp_444 === (206)) {
                        return l_59(new EAI_FAMILY_0(), ks_959, undefined);
                      } else if (tmp_444 === (207)) {
                        return l_59(new EAI_MEMORY_0(), ks_959, undefined);
                      } else if (tmp_444 === (208)) {
                        return l_59(new EAI_NODATA_0(), ks_959, undefined);
                      } else if (tmp_444 === (209)) {
                        return l_59(new EAI_NONAME_0(), ks_959, undefined);
                      } else if (tmp_444 === (210)) {
                        return l_59(new EAI_OVERFLOW_0(), ks_959, undefined);
                      } else if (tmp_444 === (211)) {
                        return l_59(new EAI_PROTOCOL_0(), ks_959, undefined);
                      } else if (tmp_444 === (212)) {
                        return l_59(new EAI_SERVICE_0(), ks_959, undefined);
                      } else if (tmp_444 === (213)) {
                        return l_59(new EAI_SOCKTYPE_0(), ks_959, undefined);
                      } else if (tmp_444 === (215)) {
                        return l_59(new ECHARSET_0(), ks_959, undefined);
                      } else if (tmp_444 === (216)) {
                        return l_59(new ENONET_0(), ks_959, undefined);
                      } else if (tmp_444 === (217)) {
                        return l_59(new UNKNOWN_0(), ks_959, undefined);
                      } else if (tmp_444 === (218)) {
                        return l_59(new EOF_0(), ks_959, undefined);
                      } else if (tmp_444 === (219)) {
                        return l_59(new EUNATCH_0(), ks_959, undefined);
                      } else if (tmp_444 === (220)) {
                        return l_59(new ESHUTDOWN_0(), ks_959, undefined);
                      } else {
                        const tmp_523 = (function() { throw ((("Not a valid error code: ") + (('' + tmp_444)))) })();
                        n_17 = tmp_523;
                      }
                    } else {
                      n_17 = v_r_151;
                    }
                    const s_236 = offset_3.value;
                    offset_3.value = (s_236 + n_17);
                    const s_237 = offset_3.value;
                    if ((s_237 < (tmp_442.length))) {
                      return go_14(ks_959, k_1098);
                    } else {
                      return () => k_1098($effekt.unit, ks_959);
                    }
                  });
                }
                return go_14(ks_797, (tmp_524, ks_1117) => {
                  DEALLOC(offset_3);
                  return b_blockBinding_1(ks_1117, (_247, ks_1118) => {
                    DEALLOC(output_12);
                    DEALLOC(text_0);
                    return () => k_67(tmp_524, ks_1118);
                  });
                });
              });
            });
          }));
      });
    }), ks_1119, k_1099);
}

(typeof module != "undefined" && module !== null ? module : {}).exports = $main = {
  main: () => RUN_TOPLEVEL(main_0)
};